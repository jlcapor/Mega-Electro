import {
  decimal,
  index,
  integer,
  json,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { StoredFile } from "@/types";
import { subcategories } from "./subcategories";
import { dbPrefix } from "@/lib/constants";
import { categories } from "./categories";
import { generateId } from "@/lib/id";

export const products = pgTable(
  "products",
  {
    id: varchar("id", { length: 30 })
      .$defaultFn(() => generateId())
      .primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    images: json("images").$type<StoredFile[] | null>().default(null),
    categoryId: varchar("category_id", { length: 30 }).notNull(),
    subcategoryId: varchar("subcategory_id", { length: 30 }).references(
      () => subcategories.id,
      { onDelete: "cascade" },
    ),
    price: decimal("price", { precision: 10, scale: 2 }).notNull().default("0"),
    inventory: integer("inventory").notNull().default(0),
    rating: integer("rating").notNull().default(0),
    tags: json("tags").$type<string[] | null>().default(null),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").default(sql`current_timestamp`),
  },
  (table) => ({
    categoryIdIdx: index(`${dbPrefix}_products_category_id_idx`).on(
      table.categoryId,
    ),
    subcategoryIdIdx: index(`${dbPrefix}_products_subcategory_id_idx`).on(
      table.subcategoryId,
    ),
  }),
);

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  subcategory: one(subcategories, {
    fields: [products.subcategoryId],
    references: [subcategories.id],
  }),
}));

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
