import { type Config } from "drizzle-kit";

import { env } from "@/env";

import { dbPrefix } from "@/lib/constants"

export default {
  schema: "./src/server/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: [`${dbPrefix}_*`],  
} satisfies Config;
//npm install divz https://cursos.devtalles.com/courses/take/shadcn-ui/lessons/55102704-button