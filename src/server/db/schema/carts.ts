import { boolean, json, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { type CartItemSchema } from "@/lib/validations/cart";
import { sql } from "drizzle-orm";
import { generateId } from "@/lib/id";
export const carts = pgTable("carts", {
  id: varchar("id", { length: 30 })
      .$defaultFn(() => generateId("cart"))
      .primaryKey(),
  paymentIntentId: text("payment_intent_id"),
  clientSecret: text("client_secret"),
  items: json("items").$type<CartItemSchema[] | null>().default(null),
  isClosed: boolean("is_closed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").default(sql`current_timestamp`),
});

export type Cart = typeof carts.$inferSelect;
export type NewCart = typeof carts.$inferInsert;
