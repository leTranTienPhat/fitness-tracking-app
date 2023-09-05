import * as z from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .nonempty("Username is required")
    .min(4, { message: "Must be at least 4 characters" }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, { message: "Must be at least 8 characters" }),
});

export type ILoginSchema = typeof loginSchema;
