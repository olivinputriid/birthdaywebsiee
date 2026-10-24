import { createServerFn } from "@tanstack/react-start";
import type { Wish } from "./wishes-store";

const REACTIONS = ["favorite", "celebration", "smile"] as const;
type ReactionType = (typeof REACTIONS)[number];

// Compressed client-side to ~800px JPEG; cap the payload so the store can't be abused.
const MAX_PHOTO_LENGTH = 3_000_000;

export const listWishes = createServerFn({ method: "GET" }).handler(async (): Promise<Wish[]> => {
  const { desc } = await import("drizzle-orm");
  const { db } = await import("../../db/index.js");
  const { wishes } = await import("../../db/schema.js");

  const rows = await db.select().from(wishes).orderBy(desc(wishes.createdAt));
  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    message: row.message,
    photo: row.photoKey ? `/api/wish-photo/${row.photoKey}` : null,
    created_at: row.createdAt.toISOString(),
    reactions: { favorite: row.favorite, celebration: row.celebration, smile: row.smile },
  }));
});

export const createWish = createServerFn({ method: "POST" })
  .inputValidator((data: { name: string; message: string; photo?: string | null; createdAt?: string }) => {
    const name = String(data?.name ?? "").trim();
    const message = String(data?.message ?? "").trim();
    if (!name || !message) throw new Error("Harap isi nama dan pesan ucapan Anda.");
    if (name.length > 60 || message.length > 1000) throw new Error("Nama atau pesan ucapan terlalu panjang.");
    const photo = typeof data?.photo === "string" && data.photo ? data.photo : null;
    if (photo && (!photo.startsWith("data:image/") || photo.length > MAX_PHOTO_LENGTH)) {
      throw new Error("Foto tidak valid atau terlalu besar.");
    }
    const createdAt = data?.createdAt ? new Date(data.createdAt) : undefined;
    return {
      name,
      message,
      photo,
      createdAt: createdAt && !Number.isNaN(createdAt.getTime()) ? createdAt : undefined,
    };
  })
  .handler(async ({ data }) => {
    const { db } = await import("../../db/index.js");
    const { wishes } = await import("../../db/schema.js");

    let photoKey: string | null = null;
    if (data.photo) {
      const { getStore } = await import("@netlify/blobs");
      const match = /^data:(image\/[a-z+.-]+);base64,(.+)$/i.exec(data.photo);
      if (!match) throw new Error("Foto tidak valid.");
      const bytes = Uint8Array.from(Buffer.from(match[2], "base64"));
      photoKey = crypto.randomUUID();
      await getStore("wish-photos").set(photoKey, bytes.buffer as ArrayBuffer, {
        metadata: { contentType: match[1] },
      });
    }

    const [row] = await db
      .insert(wishes)
      .values({ name: data.name, message: data.message, photoKey, createdAt: data.createdAt })
      .returning({ id: wishes.id });
    return row.id;
  });

export const reactToWish = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string; type: ReactionType }) => {
    if (!REACTIONS.includes(data?.type)) throw new Error("Invalid reaction");
    if (!/^[0-9a-f-]{36}$/i.test(String(data?.id))) throw new Error("Invalid wish id");
    return data;
  })
  .handler(async ({ data }) => {
    const { eq, sql } = await import("drizzle-orm");
    const { db } = await import("../../db/index.js");
    const { wishes } = await import("../../db/schema.js");

    const column = wishes[data.type];
    await db
      .update(wishes)
      .set({ [data.type]: sql`${column} + 1` })
      .where(eq(wishes.id, data.id));
  });
