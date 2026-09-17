import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Enter a valid email address").max(200),
  message: z.string().min(10, "Message should be at least 10 characters").max(4000),
  // Honeypot field — real users never fill this in.
  company: z.string().max(0, "Spam detected").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
