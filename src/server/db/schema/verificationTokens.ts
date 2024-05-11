import { primaryKey, timestamp, varchar } from "drizzle-orm/pg-core";
import { createTable } from "../utils";

export const verificationTokens = createTable(
    "verificationToken",
    {
      identifier: varchar("identifier", { length: 255 }).notNull(),
      token: varchar("token", { length: 255 }).notNull(),
      expires: timestamp("expires", {
        mode: "date",
        withTimezone: true,
      }).notNull(),
    },
    (vt) => ({
      compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
    })
  );