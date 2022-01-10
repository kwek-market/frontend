export const CATEGORIES = /* GraphQL */ `
  query categories {
    categories {
      id
      name
      parent {
        id
        name
      }
      child {
        id
        name
      }
      category {
        id
        productTitle
        user {
          id
        }
      }
      subcategory {
        id
      }
    }
  }
`;

export const SUBCATEGORIES = /* GRAPHQL */ `
query subcategories {
  subcategories {
    id
    name
    parent {
      id
      name
    }
    child {
      id
      name
    }
    category {
      id
      productTitle
      user {
        id
      }
    }
    subcategory {
      id
    }
  }
}
`;
