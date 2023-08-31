import * as z from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .nonempty("Required")
    .min(4, { message: "At least 4 characters" }),
  password: z
    .string()
    .nonempty("Required")
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type ILoginSchema = typeof loginSchema;
