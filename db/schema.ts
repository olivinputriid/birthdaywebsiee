import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const wishes = pgTable("wishes", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  message: text().notNull(),
  photoKey: text("photo_key"),
  favorite: integer().notNull().default(1),
  celebration: integer().notNull().default(0),
  smile: integer().notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
