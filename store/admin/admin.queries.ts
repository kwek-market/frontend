export const GET_TOTAL_ORDERS = /* GraphQL */ `
  query getTotalOrders($startDate: String!, $endDate: String!, $token: String!) {
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
  query getAverageSales($startDate: String!, $endDate: String!, $token: String!) {
    getAverageSales(startDate: $startDate, endDate: $endDate, token: $token) {
      averageOrderValue
      prevAverageOrderValue
      percentage
      status
    }
  }
`;

export const GET_TOTAL_ACTIVE_CUSTOMERS = /* GraphQL */ `
  query getTotalActiveCustomers($startDate: String!, $endDate: String!, $token: String!) {
    getTotalActiveCustomers(startDate: $startDate, endDate: $endDate, token: $token) {
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
  query getRecentTransactions(
    $page: Int
    $pageSize: Int
    $token: String!
    $startDate: String!
    $endDate: String!
  ) {
    getRecentTransactions(
      page: $page
      pageSize: $pageSize
      startDate: $startDate
      endDate: $endDate
      token: $token
    ) {
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
  query reviews($page: Int, $pageSize: Int, $productId: String, $sortBy: String) {
    reviews(page: $page, pageSize: $pageSize, productId: $productId, sortBy: $sortBy) {
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
    $icon: String
    $name: String!
    $parent: String
    $publishDate: Date
    $visibility: String!
  ) {
    addCategory(
      icon: $icon
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
    $sellerIsRejected: Boolean
    $customer: Boolean
    $active: Boolean
    $redFlagged: Boolean
    $page: Int
    $pageSize: Int
    $search: String
  ) {
    getUserType(
      token: $token
      seller: $seller
      sellerIsRejected: $sellerIsRejected
      customer: $customer
      active: $active
      redFlagged: $redFlagged
      page: $page
      pageSize: $pageSize
      search: $search
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
        dateJoined
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

export const GET_CUSTOMERS = /* GraphQL */ `
  query getCustomers(
    $token: String!
    $seller: Boolean
    $sellerIsRejected: Boolean
    $customer: Boolean
    $active: Boolean
    $redFlagged: Boolean
    $page: Int
    $pageSize: Int
    $search: String
  ) {
    getUserType(
      token: $token
      seller: $seller
      sellerIsRejected: $sellerIsRejected
      customer: $customer
      active: $active
      redFlagged: $redFlagged
      page: $page
      pageSize: $pageSize
      search: $search
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
        dateJoined
        email
        billingSet {
          city
          state
        }
      }
    }
  }
`;

export const GET_ALL_ORDERS = /* GraphQL */ `
  query allOrders(
    $token: String!
    $page: Int
    $pageSize: Int
    $search: String # $productId: String # $orderBy: String
  ) {
    allOrders(token: $token, page: $page, pageSize: $pageSize, search: $search) {
      objects {
        id
        closed
        orderId
        cartItems {
          id
          productOptionId
          quantity
          price
          ordered
        }
        deliveryStatus
        orderPriceTotal
        orderPrice
        dateCreated
        paid
      }
      page
      pages
      hasNext
      hasPrev
    }
  }
`;

export const GET_TOTAL_CUSTOMER_EXPENSES = /* GraphQL */ `
  query getCustomerTotalExpense($token: String!, $id: String!) {
    getCustomerTotalExpense(token: $token, id: $id) {
      totalSpent
    }
  }
`;

export const GET_CUSTOMER_TOTAL_ORDERS = /* GraphQL */ `
  query getCustomerOrders($token: String!, $id: String!) {
    getCustomerOrders(token: $token, id: $id) {
      totalOrders
    }
  }
`;

export const GET_CUSTOMER_ORDERS = /* GraphQL */ `
  query getCustomerOrdersPaginated($token: String!, $id: String!) {
    getCustomerOrdersPaginated(token: $token, id: $id) {
      objects {
        id
        orderId
        cartItems {
          product {
            productTitle
          }
          price
          quantity
        }
        dateCreated
        deliveryStatus
        paid
        orderPriceTotal
        orderPrice
      }
      page
      pages
      hasNext
      hasPrev
    }
  }
`;

export const GET_USER_BY_ID = /* GraphQL */ `
  query getAdminUser($token: String!, $id: String!) {
    getUserById(token: $token, id: $id) {
      id
      firstName
      lastName
      fullName
      dateJoined
      isActive
      email
      phoneNumber
      billingSet {
        city
        state
        address
        fullName
      }
    }
  }
`;

export const GET_ORDERS_ADMIN = /* GraphQL */ `
  query order($token: String!, $id: String!) {
    order(token: $token, id: $id) {
      orderId
      dateCreated
      user {
        fullName
        email
        phoneNumber
      }
      orderPrice
      orderPriceTotal
      cartItems {
        id
        product {
          productTitle
          image {
            imageUrl
          }
        }
        price
        quantity
      }
      paymentMethod
      orderPrice
      deliveryMethod
      doorStep {
        city
        state
        address
        fullName
      }
    }
  }
`;
