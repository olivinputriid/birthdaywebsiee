import { getStore } from "@netlify/blobs";

export default async (_req: Request, context: { params: Record<string, string> }) => {
  const result = await getStore("wish-photos").getWithMetadata(context.params.key, { type: "arrayBuffer" });
  if (!result) return new Response("Not found", { status: 404 });

  return new Response(result.data, {
    headers: {
      "content-type": String(result.metadata.contentType ?? "image/jpeg"),
      "cache-control": "public, max-age=31536000, immutable",
    },
  });
};

export const config = {
  path: "/api/wish-photo/:key",
};
