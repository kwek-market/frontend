import { z } from "zod";

export const SendEmailSchema = z.object({
  subject: z.string({
    required_error: "Subject is Required",
    invalid_type_error: "type of Discount Percent should be string",
  }),
  template: z.string({ required_error: "Template is required" }),
  userList: z.array(z.string(), { invalid_type_error: "userList type is invalid" }),
});

export type SendEmailSchemaType = z.infer<typeof SendEmailSchema>;
