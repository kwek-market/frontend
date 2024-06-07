export const PLACEORDER = /* GRAPHQL */ `
  mutation placeOrder(
    $addressId: String!
    $cartId: String!
    $couponIds: [String]
    $deliveryMethod: String!
    $paymentMethod: String!
    $deliveryFee: Float!
    $paymentRef: String
    $token: String!
  ) {
    placeOrder(
      addressId: $addressId
      cartId: $cartId
      couponIds: $couponIds
      deliveryMethod: $deliveryMethod
      deliveryFee: $deliveryFee
      paymentMethod: $paymentMethod
      paymentRef: $paymentRef
      token: $token
    ) {
        status
        message
        orderId
    }
  }
`;
