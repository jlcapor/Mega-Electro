import { relations, sql } from "drizzle-orm";
import { timestamp, varchar } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { accounts } from "../schema";

export const users = createTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    withTimezone: true,
  }).default(sql`CURRENT_TIMESTAMP`),
  image: varchar("image", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
    accounts: many(accounts),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
