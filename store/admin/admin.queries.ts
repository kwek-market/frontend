export const GET_TOTAL_ORDERS = /* GraphQL */ `
  query getTotalOrders(
    $startDate: String!
    $endDate: String!
    $token: String!
  ) {
    getTotalOrders(startDate: $startDate, endDate: $endDate, token: $token) {
      totalOrders
      prevOrders
      percentage
      status
    }
  }
`;

export const GET_TOTAL_SALES = /* GraphQL */ `
  query getTotalSales($startDate: String!, $endDate: String!, $token: String!) {
    getTotalSales(startDate: $startDate, endDate: $endDate, token: $token) {
      totalSales
      prevSales
      percentage
      status
    }
  }
`;

export const GET_AVERAGE_ORDER_VALUE = /* GraphQL */ `
  query getAverageSales(
    $startDate: String!
    $endDate: String!
    $token: String!
  ) {
    getAverageSales(startDate: $startDate, endDate: $endDate, token: $token) {
      averageOrderValue
      prevAverageOrderValue
      percentage
      status
    }
  }
`;

export const GET_TOTAL_ACTIVE_CUSTOMERS = /* GraphQL */ `
  query getTotalActiveCustomers(
    $startDate: String!
    $endDate: String!
    $token: String!
  ) {
    getTotalActiveCustomers(
      startDate: $startDate
      endDate: $endDate
      token: $token
    ) {
      activeCustomers
    }
  }
`;

export const GET_TOTAL_REVENUE = /* GraphQL */ `
  query getTotalRevenue($token: String!) {
    getTotalRevenue(token: $token)
  }
`;

export const GET_RECENT_TRANSACTIONS = /* GraphQL */ `
  query getRecentTransactions($page: Int, $pageSize: Int, $token: String!) {
    getRecentTransactions(page: $page, pageSize: $pageSize, token: $token) {
      objects {
        user {
          fullName
          email
        }
        orderPrice
        doorStep {
          state
        }
      }
    }
  }
`;

export const GET_PRODUCTS = /* GraphQL */ `
  query products($page: Int, $pageSize: Int) {
    products(page: $page, pageSize: $pageSize) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        productTitle
        dateCreated
        options {
          price
          discountedPrice
          size
        }
        sales {
          amount
        }
        user {
          fullName
          storedetail {
            storeName
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT = /* GraphQL */ `
  query product($id: String!) {
    product(id: $id) {
      id
      productTitle
      options {
        price
        discountedPrice
        size
      }
      image {
        id
        imageUrl
      }
      sales {
        id
        amount
        date
      }
      productRating {
        review
        comment {
          id
          review
        }
      }
      user {
        id
        fullName
        sellerProfile {
          shopName
        }
        storedetail {
          storeName
        }
      }
    }
  }
`;

export const GET_PRODUCT_REVIEWS = /* GraphQL */ `
  query reviews(
    $page: Int
    $pageSize: Int
    $productId: String
    $sortBy: String
  ) {
    reviews(
      page: $page
      pageSize: $pageSize
      productId: $productId
      sortBy: $sortBy
    ) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        rating
        review
        user {
          id
          firstName
          lastName
          fullName
        }
        likes
        dislikes
        ratedAt
      }
    }
  }
`;

export const GET_CATEGORIES = /* GraphQL */ `
  query categories($search: String) {
    categories(search: $search) {
      id
      name
      icon
      visibility
      category {
        id
      }
    }
  }
`;

export const DELETE_CATEGORY = /* GraphQL */ `
  mutation deleteCategory($id: String!) {
    deleteCategory(id: $id) {
      message
      status
    }
  }
`;

export const UPDATE_CATEGORY = /* GraphQL */ `
  mutation updateCategory(
    $id: String!
    $name: String!
    $parent: String
    $publishDate: Date
    $visibility: String
  ) {
    updateCategory(
      id: $id
      name: $name
      parent: $parent
      publishDate: $publishDate
      visibility: $visibility
    ) {
      message
      status
    }
  }
`;

export const CREATE_CATEGORY = /* GraphQL */ `
  mutation addCategory(
    $name: String!
    $parent: String
    $publishDate: Date
    $visibility: String
  ) {
    addCategory(
      name: $name
      parent: $parent
      publishDate: $publishDate
      visibility: $visibility
    ) {
      message
      status
    }
  }
`;

export const GET_SELLERS = /* GraphQL */ `
  query getSellers(
    $token: String!
    $seller: Boolean
    $active: Boolean
    $redFlagged: Boolean
    $page: Int
    $pageSize: Int
  ) {
    getUserType(
      token: $token
      seller: $seller
      active: $active
      redFlagged: $redFlagged
      page: $page
      pageSize: $pageSize
    ) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        firstName
        lastName
        fullName
        email
        sellerProfile {
          id
          state
          city
          lga
        }
      }
    }
  }
`;
