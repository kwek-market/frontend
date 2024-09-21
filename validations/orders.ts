import { z } from "zod";

export enum OrderDeliveryStatus {
  OrderInProgress = "Order in progress",
  Delivered = "delivered",
  Cancelled = "closed",
}

export enum OrderDeliveryStatusWhenPaid {
  OrderInProgress = "Order in progress",
  Delivered = "delivered",
}


export const UpdateOrderDeliveryStatusSchema = z.object({
  orderId: z.string({
    required_error: "Order is required",
    invalid_type_error: "type of Order id should be string",
  }),
  deliveryStatus: z.enum(
    [
      OrderDeliveryStatus.OrderInProgress,
      OrderDeliveryStatus.Delivered,
      OrderDeliveryStatus.Cancelled,
    ],
    { required_error: "delivery status must be among this" }
  ),
  token: z
    .string({
      invalid_type_error: "type of token should be string",
    })
    .optional(),
});

export type UpdateOrderDeliveryStatusType = z.infer<typeof UpdateOrderDeliveryStatusSchema>;
