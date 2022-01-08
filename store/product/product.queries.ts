export const createProduct = /* GraphQL */ `
  mutation createProduct(
    $title: String!
    $description: String!
    $price: Float!
    $category: String!
    $subcategory: String!
    $image: String!
  ) {
    createProduct(
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
