export const GETORDER = `
  query orders($token: String!) {
    orders(token: $token) {
      id
      orderId
      paymentMethod
      deliveryMethod
      deliveryStatus
      closed
      coupon
      paid
      dateCreated
    }
  }
`