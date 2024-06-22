import { z } from "zod";

export const UpdateStateDeliveryFeeSchema = z.object({
  state: z.string({
    required_error: "State is required",
    invalid_type_error: "type of State should be string",
  }),
  fee: z.number({ required_error: "Fee is required" }),
  id: z.string({
    required_error: "Id is required",
    invalid_type_error: "Id of State should be string",
  }),
  city: z.string({
    required_error: "City is required",
    invalid_type_error: "type of City should be string",
  }),
});

export type UpdateStateDeliveryFeeType = z.infer<typeof UpdateStateDeliveryFeeSchema>;
