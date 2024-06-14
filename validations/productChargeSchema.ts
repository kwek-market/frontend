import { z } from "zod";

export const CreateProductChargeSchema = z.object({
  charge: z.number({
    required_error: "Charge amount is required",
    invalid_type_error: "type of Charge amount should be number",
  }),
  hasFixedAmount: z.boolean({ required_error: "Charge type is required" }),
});

export type CreateProductChargeType = z.infer<typeof CreateProductChargeSchema>;

export const UpdateProductChargeSchema = z.object({
  id: z.string({ required_error: "ID is required" }),
  charge: z.number({
    required_error: "Charge amount is required",
    invalid_type_error: "type of Charge amount should be number",
  }),
  hasFixedAmount: z.boolean({ required_error: "Charge type is required" }),
});

export type UpdateProductChargeType = z.infer<typeof UpdateProductChargeSchema>;
