import { z } from "zod";

export const PromoteProductSchema = z.object({
  amount: z.number({
    required_error: "Amount is required",
    invalid_type_error: "type of Amount should be number",
  }),
  days: z.number({ required_error: "Days is required" }),
  productId: z.string({
    invalid_type_error: "userList type is invalid",
    required_error: "Select a valid product",
  }),
});

export type PromoteProductType = z.infer<typeof PromoteProductSchema>;
