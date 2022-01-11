export const AddToWishlist = /* GraphQL */ `
  mutation addToWishlist($productId: String, $token: String) {
    addToWishlist(productId: $productId, token: $token) {
      status
      message
    }
  }
`;

export const GetWishlists = /* GraphQL */ `
  query wishlists($token: String) {
    wishlists(token: $token) {
      id
      products {
        id
        productTitle
        dateCreated
        options {
          size
          quantity
          price
          discountedPrice
          optionTotalPrice
        }
        price
        image {
          id
          imageUrl
        }
      }
      createdAt
    }
  }
`;
