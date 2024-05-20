import { z } from "zod";
import bcrypt from "bcrypt";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { users } from "@/server/db/schema/users";

export const AuthRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        role: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const existingUser = await ctx.db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, input.email),
      });

      if (existingUser) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "El Usuario ya esta registrado",
        });
      }

      const role = await ctx.db.query.roles.findFirst({
        where: (roles, { eq }) => eq(roles.name, input.role),
      });

      if (!role) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "El rol no existe",
        });
      }

      const hashedPassword = await bcrypt.hash(input.password, 12);
      
      return await ctx.db.insert(users).values({
        name: input.name,
        email: input.email,
        password: hashedPassword,
        roleId: role.id
      })
    }),
});



