import { z } from "zod";

export const UpdateStateDeliveryFeeSchema = z.object({
  state: z.string({
    required_error: "State is required",
    invalid_type_error: "type of State should be string",
  }),
  fee: z.number({ required_error: "Fee is required" }),
});

export type UpdateStateDeliveryFeeType = z.infer<typeof UpdateStateDeliveryFeeSchema>;
