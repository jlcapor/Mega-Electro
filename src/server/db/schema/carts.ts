import { boolean, json, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { type CartItemSchema } from "@/lib/validations/cart";
import { sql } from "drizzle-orm";
export const carts = createTable("carts", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  paymentIntentId: text("payment_intent_id"),
  clientSecret: text("client_secret"),
  items: json("items").$type<CartItemSchema[] | null>().default(null),
  isClosed: boolean("is_closed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").default(sql`current_timestamp`),
});

export type Cart = typeof carts.$inferSelect;
export type NewCart = typeof carts.$inferInsert;
