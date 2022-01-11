export const CreateProduct = /* GraphQL */ `
  mutation createProduct(
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
      boolean
    }
  }
`;

export const updateProduct = /* GraphQL */ `
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
      image
    }
  }
`;

export const deleteProduct = /* GraphQL */ `
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export const getProducts = /* GraphQL */ `
  query products {
    products {
      id
      title
      description
      price
      category
      subcategory
      image
    }
  }
`;

export const getProduct = /* GraphQL */ `
  query product($id: ID!) {
    product(id: $id) {
      id
      title
      description
      price
      category
      subcategory
      image
    }
  }
`;
