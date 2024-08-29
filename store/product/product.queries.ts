export const CreateProduct = /* GraphQL */ `
  mutation createProduct(
    $brand: String!
    $category: String!
    $chargeFivePercentVat: Boolean!
    $color: String
    $gender: String
    $keyword: [String]
    $productImageUrl: [String]!
    $productOptions: [String]!
    $productTitle: String!
    $productWeight: String
    $returnPolicy: String
    $shortDescription: String
    $subcategory: String!
    $token: String!
    $warranty: String
  ) {
    createProduct(
      brand: $brand
      category: $category
      chargeFivePercentVat: $chargeFivePercentVat
      color: $color
      gender: $gender
      keyword: $keyword
      productImageUrl: $productImageUrl
      productOptions: $productOptions
      productTitle: $productTitle
      productWeight: $productWeight
      returnPolicy: $returnPolicy
      shortDescription: $shortDescription
      subcategory: $subcategory
      token: $token
      warranty: $warranty
    ) {
      product {
        id
        productTitle
        user {
          id
          username
          isSeller
          sellerProfile {
            shopName
          }
        }
        category {
          name
        }
        subcategory {
          name
        }
        dateCreated
        image {
          id
          imageUrl
        }
        options {
          id
          size
          quantity
          price
          discountedPrice
          optionTotalPrice
        }
      }
      status
      message
    }
  }
`;

export const UpdateProduct = /* GraphQL */ `
  mutation updateProduct(
    $brand: String
    $category: String
    $chargeFivePercentVat: Boolean
    $color: String
    $gender: String
    $keyword: [String]
    $productImageUrl: [String]
    $productOptions: [String]
    $productTitle: String
    $productWeight: String
    $returnPolicy: String
    $shortDescription: String
    $subcategory: String
    $token: String!
    $warranty: String
    $productId: String!
  ) {
    updateProduct(
      brand: $brand
      category: $category
      chargeFivePercentVat: $chargeFivePercentVat
      color: $color
      gender: $gender
      keyword: $keyword
      productImageUrl: $productImageUrl
      productOptions: $productOptions
      productTitle: $productTitle
      productWeight: $productWeight
      returnPolicy: $returnPolicy
      shortDescription: $shortDescription
      subcategory: $subcategory
      token: $token
      warranty: $warranty
      productId: $productId
    ) {
      product {
        id
        productTitle
        user {
          id
          username
          isSeller
          sellerProfile {
            shopName
          }
        }
        category {
          name
        }
        subcategory {
          name
        }
        dateCreated
        image {
          id
          imageUrl
        }
        options {
          id
          size
          quantity
          price
          discountedPrice
          optionTotalPrice
        }
      }
      status
      message
    }
  }
`;

export const DeleteProduct = /* GraphQL */ `
  mutation deleteProduct($id: String!, $token: String!) {
    deleteProduct(id: $id, token: $token) {
      status
      message
    }
  }
`;

export const GetProducts = /* GraphQL */ `
  query products(
    $page: Int
    $pageSize: Int
    $search: String
    $sortBy: String
    $rating: Int
    $keyword: [String]
    $priceRange: [Float]
    $sizes: [String]
  ) {
    products(
      page: $page
      pageSize: $pageSize
      search: $search
      sortBy: $sortBy
      rating: $rating
      keyword: $keyword
      priceRange: $priceRange
      sizes: $sizes
    ) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        productTitle
        chargeFivePercentVat
        productWeight
        shortDescription
        returnPolicy
        warranty
        gender
        keyword
        clicks
        promoted
        productsWished {
          id
          product {
            id
            productTitle
          }
        }
        user {
          id
          username
          isSeller
          sellerProfile {
            shopName
          }
        }
        category {
          id
          name
        }
        subcategory {
          id
          name
        }
        sales {
          id
          amount
          date
          product {
            id
          }
        }
        options {
          id
          size
          quantity
          price
          discountedPrice
          optionTotalPrice
        }
        dateCreated
        brand
        color
        image {
          id
          imageUrl
        }
        productRating {
          id
          rating
          review
          likes
          dislikes
          ratedAt
        }
      }
    }
  }
`;

export const GetProduct = /* GraphQL */ `
  query product($id: String!) {
    product(id: $id) {
      id
      productTitle
      chargeFivePercentVat
      productWeight
      shortDescription
      returnPolicy
      warranty
      gender
      keyword
      clicks
      promoted
      user {
        id
        username
        isSeller
        sellerProfile {
          shopName
          storeBannerUrl
        }
      }
      productsWished {
        id
      }
      category {
        id
        name
      }
      subcategory {
        id
        name
      }
      sales {
        id
        amount
        date
        product {
          id
        }
      }
      options {
        id
        size
        quantity
        price
        discountedPrice
        optionTotalPrice
      }
      dateCreated
      brand
      color
      image {
        id
        imageUrl
      }
      productRating {
        id
        rating
        review
        likes
        dislikes
        ratedAt
        user {
          username
        }
      }
    }
  }
`;
