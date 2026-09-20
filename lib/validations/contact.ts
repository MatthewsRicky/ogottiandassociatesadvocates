import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),

  email: z.string().trim().email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long.")
    .optional()
    .or(z.literal("")),

  matter: z.string().trim().min(1, "Please select the type of matter."),

  message: z
    .string()
    .trim()
    .min(20, "Please provide a little more detail about your matter.")
    .max(5000, "Message is too long."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
