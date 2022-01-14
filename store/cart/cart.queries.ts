export const AddToCart = /* GraphQL */ `
  mutation addToCart(
    $ipAddress: String
    $productOptionId: String!
    $token: String
  ) {
    addToCart(
      ipAddress: $ipAddress
      productOptionId: $productOptionId
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
      product {
        id
        productTitle
      }
      quantity
      price
      cart {
        id
        ip
        user {
          id
        }
        createdAt
        cartItem {
          id
          product {
            id
          }
        }
      }
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
