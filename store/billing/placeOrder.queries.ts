export const PLACEORDER = /* GRAPHQL */ `
  mutation placeOrder(
    $addressId: String!
    $cartId: String!
    $couponId: String
    $couponType: String
    $deliveryMethod: String!
    $paymentMethod: String!
    $token: String!
  ) {
    placeOrder(
      addressId: $addressId
      cartId: $cartId
      couponId: $couponId
      couponType: $couponType
      deliveryMethod: $deliveryMethod
      paymentMethod: $paymentMethod
      token: $token
    ) {
        status
        message
        orderId
    }
  }
`;
