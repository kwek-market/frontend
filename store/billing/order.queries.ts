export const GETORDERS = `
query orders($token: String!) {
  orders(token: $token) {
    id
    closed
    orderId
    cartItems {
      id
      productOptionId
      quantity
      price
      ordered
    }
    deliveryStatus
  }
}
`;

export const GETORDER = `
  query order($token: String!, $id: String!) {
    order(token: $token, id: $id) {
      id
      closed
      orderId
      cartItems
      doorStep {
        fullName
        address
        state
        city
      }
      pickup {
        name
      }
      paid
      coupon
      orderPrice
      orderPriceTotal
      paymentMethod
      deliveryMethod
      deliveryStatus
      dateCreated
    }
  }
`;

export const TRACK_ORDER = `
  mutation trackOrder($orderId: String!) {
    trackOrder(orderId: $orderId) {
      status
      message
    }
  }
`;
