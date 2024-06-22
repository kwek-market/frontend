export const PLACEORDER = /* GRAPHQL */ `
  mutation placeOrder(
    $addressId: String!
    $cartId: String!
    $city: String
    $state: String!
    $couponIds: [String]
    $deliveryMethod: String!
    $paymentMethod: String!
    $paymentRef: String
    $token: String!
  ) {
    placeOrder(
      addressId: $addressId
      cartId: $cartId
      city: $city
      state: $state
      couponIds: $couponIds
      deliveryMethod: $deliveryMethod
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
