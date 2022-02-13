export const CreateProduct = /* GraphQL */ `
  mutation createProduct(
    $brand: String!
    $category: String!
    $chargeFivePercentVat: Boolean!
    $color: String
    $gender: String
    $keyword: [String]
    $productImageUrl: [String]!
    $productOptions: [String]
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
          sellerprofileSet {
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
    $id: ID!
    $title: String!
    $description: String!
    $price: Float!
    $category: String!
    $subcategory: String!
    $image: String!
  ) {
    updateProduct(
      id: $id
      title: $title
      description: $description
      price: $price
      category: $category
      subcategory: $subcategory
      image: $image
    ) {
      id
      title
      description
      price
      category
      subcategory
      image {
        id
        imageUrl
      }
    }
  }
`;

export const DeleteProduct = /* GraphQL */ `
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export const GetProducts = /* GraphQL */ `
  query products(
    $page: Int
    $pageSize: Int
    $search: String
    $rating: Int
    $keyword: [String]
    $clicks: String
    $sales: String
  ) {
    products(
      page: $page
      pageSize: $pageSize
      search: $search
      rating: $rating
      keyword: $keyword
      clicks: $clicks
      sales: $sales
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
          sellerprofileSet {
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
        sellerprofileSet {
          shopName
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
      sales
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
`;
