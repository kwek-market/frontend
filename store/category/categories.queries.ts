export const CATEGORIES = /* GraphQL */ `
  query categories($search: String, $visibility: String) {
    categories(search: $search, visibility: $visibility) {
      id
      name
      icon
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

export const CATEGORY = /* GraphQL */ `
  query category($id: String!) {
    category(id: $id) {
      id
      name
      visibility
      publishDate
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

export const LEASTCATEGORIES = /* GRAPHQL */ `
query leastSubcategories {
  leastSubcategories {
    id
    name
    icon
    visibility
    publishDate
    parent {
      id
      name
    }
    child {
      id
      name
    }
  }
}
`;
