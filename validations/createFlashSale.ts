import { z } from "zod";

export const CreateNewFlashSaleSchema = z.object({
  discountPercent: z.number({
    required_error: "Discount Percent is required",
    invalid_type_error: "type of Discount Percent should be number",
  }),
  days: z.number({ required_error: "Days is required" }),
  productOptionId: z.string({
    invalid_type_error: "Product Option is invalid",
    required_error: "Select a valid product",
  }),
});

export type CreateNewFlashSalesType = z.infer<typeof CreateNewFlashSaleSchema>;
