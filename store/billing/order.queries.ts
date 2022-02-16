export const GETORDER = `
  query orders($token: String!) {
    orders(token: $token) {
      id
    closed
    orderId
    user {
      username
    }
    cartItems
    doorStep {
      fullName
    }
    pickup {
      name
    }
    paid
    coupon
    paymentMethod
    deliveryMethod
    deliveryStatus
    dateCreated
    }
  }
`;

export const TRACK_ORDER = `
  query trackOrder($token: String!) {
    trackOrder(token: $token) {
      status
      message
    }
  }
`;
