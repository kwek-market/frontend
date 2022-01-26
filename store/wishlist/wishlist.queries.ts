export const AddToWishlist = /* GraphQL */ `
  mutation addToWishlist($productId: String, $token: String) {
    addToWishlist(productId: $productId, token: $token) {
      status
      message
    }
  }
`;

export const GetWishlists = /* GraphQL */ `
  query wishlists($token: String!) {
    wishlists(token: $token) {
      id
      product {
        id
        productTitle
        dateCreated
        options {
          id
          size
          quantity
          price
          discountedPrice
          optionTotalPrice
        }
        image {
          id
          imageUrl
        }
      }
      wishlist {
        id
        createdAt
      }
    }
  }
`;
