import { index, timestamp, varchar } from "drizzle-orm/pg-core";
import { createTable } from "../utils";
import { users } from "../schema";
import { relations } from "drizzle-orm";

export const sessions = createTable(
    "session",
    {
      sessionToken: varchar("sessionToken", { length: 255 })
        .notNull()
        .primaryKey(),
      userId: varchar("userId", { length: 255 })
        .notNull()
        .references(() => users.id),
      expires: timestamp("expires", {
        mode: "date",
        withTimezone: true,
      }).notNull(),
    },
    (session) => ({
      userIdIdx: index("session_userId_idx").on(session.userId),
    })
  );

  export const sessionsRelations = relations(sessions, ({ one }) => ({
    user: one(users, { fields: [sessions.userId], references: [users.id] }),
  }));