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
        imageUrl
      }

      sales {
        amount
        date
      }
      user {
        id
        fullName
        sellerprofileSet {
          shopName
        }
        storedetail {
          storeName
        }
      }
    }
  }
`;
