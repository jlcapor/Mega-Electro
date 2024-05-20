import { relations, sql } from "drizzle-orm";
import { index, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { accounts } from "../schema";
import { roles } from "./roles";
import { dbPrefix } from "@/lib/constants";
import { generateId } from "@/lib/id";

export const users = createTable(
  "user",
  {
    id: varchar("id", { length: 30 })
      .$defaultFn(() => generateId())
      .primaryKey(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: text("password"),
    emailVerified: timestamp("emailVerified", {
      mode: "date",
      withTimezone: true,
    }).default(sql`CURRENT_TIMESTAMP`),
    image: varchar("image", { length: 255 }),
    roleId: varchar("role_id", { length: 30 })
      .notNull()
      .references(() => roles.id),
  },
  (table) => ({
    roleIdIdx: index(`${dbPrefix}_users_role_id_idx`).on(table.roleId),
  }),
);

export const usersRelations = relations(users, ({ many, one }) => ({
  accounts: many(accounts),
  role: one(roles, {
    fields: [users.roleId],
    references: [roles.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
