export const AddToCart = /* GraphQL */ `
  mutation addToCart(
    $ipAddress: String
    $price: String
    $productId: String!
    $quantity: Int
    $token: String
  ) {
    addToCart(
      ipAddress: $ipAddress
      price: $price
      productId: $productId
      quantity: $quantity
      token: $token
    ) {
      status
      message
    }
  }
`;

export const GetCart = /* GraphQL */ `
  query userCart($token: String, $ip: String) {
    userCart(token: $token, ip: $ip) {
      id
      ip
      createdAt
    }
  }
`;

export const DeleteCart = /* GraphQL */ `
  mutation deleteCart($cartId: String!, $ip: String, $token: String) {
    deleteCart(cartId: $cartId, ip: $ip, token: $token) {
      status
      message
    }
  }
`;

export const DeleteCartItem = /* GraphQL */ `
  mutation deleteCartItem(
    $cartId: String!
    $ip: String
    $itemID: String!
    $token: String
  ) {
    deleteCartItem(cartId: $cartId, ip: $ip, itemID: $itemID, token: $token) {
      status
      message
    }
  }
`;
