export const PLACEORDER = /* GRAPHQL */ `
  mutation placeOrder(
    $addressId: String!
    $cartId: String!
    $couponIds: [String]
    $deliveryMethod: String!
    $paymentMethod: String!
    $productOptionsId: [String]!
    $token: String!
  ) {
    placeOrder(
      addressId: $addressId
      cartId: $cartId
      couponIds: $couponIds
      deliveryMethod: $deliveryMethod
      paymentMethod: $paymentMethod
      productOptionsId: $productOptionsId
      token: $token
    ) {
        status
        message
        orderId
    }
  }
`;
