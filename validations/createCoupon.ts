import { z } from "zod";

export const CreateCouponSchema = z.object({
  value: z.number({
    required_error: "Discount value is required",
    invalid_type_error: "type of Discount value should be number",
  }),
  validUntil: z.string({ required_error: "validUntil date is required" }),
  userList: z.array(z.string(), { invalid_type_error: "userList type is invalid" }).optional(),
});

export type CreateCouponType = z.infer<typeof CreateCouponSchema>;
