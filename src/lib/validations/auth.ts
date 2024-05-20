import * as z from "zod";

export const signinSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .max(100, {
      message: "Password must be at most 100 characters long",
    }),
});

export const signupSchema = z.object({
  name: z
  .string()
  .trim()
  .min(2, { message: 'El nombre debe tener más de 1 carácter.' }),
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida",
  }),
  password: z
    .string()
    .refine(
      (val) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          val,
        ),
      {
        message:
          "La contraseña debe tener al menos 8 caracteres y contener al menos un carácter en mayúscula, un carácter en minúscula y un símbolo especial.",
      },
    ),
  password_confirmation: z.string(),
  role: z.string(),
}).superRefine((val, ctx)=>{
  if (val.password !== val.password_confirmation) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['password_confirmation'],
      message: 'Las contraseñas no coinciden',
    });
  }
});
