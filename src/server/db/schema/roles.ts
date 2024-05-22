import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { users } from "./users";
import { generateId } from "@/lib/id";

export const roles = pgTable("roles", {
  id: varchar("id", { length: 30 })
  .$defaultFn(() => generateId())
  .primaryKey(),
  name: varchar("name", { length: 20 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").default(sql`current_timestamp`),
});

// export const rolesRelations = relations(roles, ({ many }) => ({
//   users: many(users),
// }));


export type Roles = typeof roles.$inferSelect;
export type NewRole = typeof roles.$inferInsert;
