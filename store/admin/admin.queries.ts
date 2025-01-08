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
  query products($page: Int, $pageSize: Int, $search: String, $sortBy: String) {
    products(page: $page, pageSize: $pageSize, search: $search, sortBy: $sortBy) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        productTitle
        dateCreated
        options {
          id
          price
          discountedPrice
          size
          color
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
      brand
      productWeight
      warranty
      color
      gender
      options {
        price
        discountedPrice
        size
        quantity
        color
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
  query categories($search: String, $visibility: String) {
    categories(search: $search, visibility: $visibility) {
      id
      name
      icon
      visibility
      category {
        id
      }
      child {
        id
        name
      }
    }
  }
`;

export const GET_CATEGORY = /* GraphQL */ `
  query category($id: String!) {
    category(id: $id) {
      id
      name
      icon
      visibility
      publishDate
      category {
        id
      }
      child {
        id
        name
        icon
        visibility
        publishDate
        child {
          id
        }
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
    $icon: String
  ) {
    updateCategory(
      id: $id
      name: $name
      parent: $parent
      publishDate: $publishDate
      visibility: $visibility
      icon: $icon
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
    $sellerIsVerified: Boolean
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
      sellerIsVerified: $sellerIsVerified
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
        wallet {
          id
          balance
        }
        sellerProfile {
          id
          state
          city
          lga
          phoneNumber
          date
          sellerIsVerified
          preferedId
          preferedIdUrl
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
        phoneNumber
        dateJoined
        email
        totalSpent
        billingSet {
          city
          state
          contact
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
        paymentMethod
        deliveryFee
        user {
          fullName
          firstName
          lastName
        }
        doorStep {
          city
          address
          state
        }
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
      isFlagged
      billingSet {
        city
        state
        address
        fullName
      }
      sellerProfile {
        id
        phoneNumber
        shopAddress
        shopName
        shopUrl
        state
        city
        lga
        date
        sellerIsVerified
        sellerIsRejected
        preferedId
        preferedIdUrl
      }
      storedetail {
        id
        storeName
        email
        address
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
        id
        fullName
        email
        phoneNumber
        sellerProfile {
          phoneNumber
        }
        billingSet {
          contact
        }
      }
      orderPrice
      orderPriceTotal
      cartItems {
        id
        productOptionId
        product {
          productTitle
          image {
            imageUrl
          }
          brand
          color
          gender
          user {
            id
            fullName
            email
            phoneNumber
          }
          options {
            id
            productCharge
            color
            size
            price
          }
        }
        charge
        price
        quantity
      }
      paymentMethod
      orderPrice
      deliveryMethod
      deliveryStatus
      deliveryFee
      paid
      closed
      doorStep {
        city
        state
        address
        fullName
      }
    }
  }
`;

export const GET_ORDERS_BY_ID = /* GraphQL */ `
  query orderByOrderId($token: String!, $id: String!) {
    orderByOrderId(token: $token, orderId: $id) {
      orderId
      dateCreated
      user {
        id
        fullName
        email
        phoneNumber
        sellerProfile {
          phoneNumber
        }
        billingSet {
          contact
        }
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
          brand
          color
          gender
          user {
            id
            fullName
            email
            phoneNumber
          }
        }
        price
        quantity
      }
      paymentMethod
      orderPrice
      deliveryMethod
      deliveryStatus
      deliveryFee
      paid
      closed
      doorStep {
        city
        state
        address
        fullName
      }
    }
  }
`;

export const GET_PRODUCT_ORDERS = /* GraphQL */ `
  query allOrders(
    $token: String!
    $page: Int
    $pageSize: Int
    $search: String
    $productId: String
    $orderBy: String
  ) {
    allOrders(
      token: $token
      page: $page
      pageSize: $pageSize
      search: $search
      productId: $productId
      orderBy: $orderBy
    ) {
      page
      objects {
        id
        orderId
        user {
          fullName
          id
        }
        cartItems {
          quantity
        }
        orderPriceTotal
        doorStep {
          address
        }
        dateCreated
        deliveryStatus
      }
    }
  }
`;

export const GET_CUSTOMER_AVERAGE_ORDERS = /* GraphQL */ `
  query getCustomerAverageOrder($token: String!, $id: String!) {
    getCustomerAverageOrder(token: $token, id: $id) {
      averageOrderValue
    }
  }
`;

export const CREATE_ADMIN_COUPON = /* GraphQL */ `
  mutation createCoupon(
    $code: String
    $days: Int
    $userList: [String]
    $validUntil: DateTime
    $value: Int!
  ) {
    createCoupon(
      code: $code
      days: $days
      userList: $userList
      validUntil: $validUntil
      value: $value
    ) {
      message
      status
      coupon {
        code
        value
        validUntil
        userList
      }
    }
  }
`;

export const GET_ADMIN_COUPONS = /* GraphQL */ `
  query coupons($page: Int, $pageSize: Int) {
    coupons(page: $page, pageSize: $pageSize) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        code
        value
        createdAt
        validUntil
      }
    }
  }
`;

export const GET_ADMIN_PROMOTED_PRODUCTS = /* GraphQL */ `
  query getPromotedProductsPaginated($token: String!, $page: Int, $pageSize: Int, $search: String) {
    getPromotedProductsPaginated(page: $page, pageSize: $pageSize, token: $token, search: $search) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        productTitle
        user {
          fullName
          email
        }
        promo {
          startDate
          endDate
          days
          active
          amount
          balance
          reach
          linkClicks
        }
      }
    }
  }
`;

export const PROMOTE_ADMIN_PRODUCT = /* GraphQL */ `
  mutation promoteProduct($amount: Float!, $days: Int!, $productId: String!, $token: String!) {
    promoteProduct(amount: $amount, days: $days, productId: $productId, token: $token) {
      message
      status
    }
  }
`;

export const GET_WALLET_TRANSACTIONS = /* GraphQL */ `
  query walletTransactions($token: String!, $page: Int, $search: String, $sortBy: String) {
    getWalletTransactions(token: $token, page: $page, search: $search, sortBy: $sortBy) {
      pages
      page
      hasNext
      hasPrev
      objects {
        id
        wallet {
          balance
          owner {
            fullName
          }
        }
        remark
        amount
        date
        transactionType
        status
      }
    }
  }
`;

export const GET_REFUND_REQUESTS = /* GraphQL */ `
  query getRefundRequests($token: String!, $page: Int, $pageSize: Int) {
    getRefundRequests(token: $token, page: $page, pageSize: $pageSize) {
      pages
      page
      hasNext
      hasPrev
      objects {
        id
        order {
          id
          orderId
          user {
            fullName
          }
        }
        accountNumber
        bankName
        numberOfProduct
        status
        dateCreated
      }
    }
  }
`;

export const GET_REFUNDS = /* GraphQL */ `
  query getRefunds($token: String!, $page: Int, $pageSize: Int) {
    getRefunds(token: $token, page: $page, pageSize: $pageSize) {
      pages
      page
      hasNext
      hasPrev
      objects {
        id
        order {
          id
          orderId
          user {
            fullName
          }
        }
        accountNumber
        bankName
        numberOfProduct
        status
        dateCreated
      }
    }
  }
`;

export const GET_ADMIN_FLASH_SALES = /* GraphQL */ `
  query getFlashSales($page: Int, $pageSize: Int, $token: String!) {
    getFlashSales(page: $page, pageSize: $pageSize, token: $token) {
      page
      pages
      hasNext
      hasPrev
      objects {
        id
        product {
          product {
            productTitle
            image {
              imageUrl
            }
          }
          size
          quantity
          price
          discountedPrice
          optionTotalPrice
        }
        startDate
        numberOfDays
        discountPercent
        status
      }
    }
  }
`;

export const CREATE_FLASH_SALE = /* GraphQL */ `
  mutation newFlashSales(
    $discountPercent: Float!
    $days: Int!
    $productOptionId: String!
    $token: String!
  ) {
    newFlashSales(
      discountPercent: $discountPercent
      days: $days
      productOptionId: $productOptionId
      token: $token
    ) {
      message
      status
    }
  }
`;

export const SEND_EMAILS = /* GraphQL */ `
  mutation sendEmail($subject: String!, $template: String!, $token: String!, $userList: [String]!) {
    sendEmailToUsers(subject: $subject, template: $template, token: $token, userList: $userList) {
      message
      status
    }
  }
`;

export const GET_STATE_DELIVERY_FEE = /* GraphQL */ `
  query getStateDelivery {
    getStateDeliveryFee {
      state
      fee
      city
      id
    }
  }
`;

export const STATE_DELIVERY_FEE = /* GraphQL */ `
  query getStateDelivery {
    stateDeliveryFees {
      state
      deliveryFees {
        id
        city
        fee
      }
    }
  }
`;

export const UPDATE_STATE_DELIVERY_FEE = /* GraphQL */ `
  mutation updateStateDelivery(
    $fee: Float!
    $state: String!
    $token: String!
    $id: String!
    $city: String
  ) {
    updateStateDeliveryFee(fee: $fee, state: $state, token: $token, id: $id, city: $city) {
      deliveryCharge {
        state
        fee
        city
        id
      }
      message
      status
    }
  }
`;

export const CREATE_STATE_DELIVERY_FEE = /* GraphQL */ `
  mutation createStateDelivery($fee: Float!, $state: String!, $token: String!, $city: String!) {
    createStateDeliveryFee(fee: $fee, state: $state, token: $token, city: $city) {
      deliveryCharge {
        state
        fee
        city
      }
      message
      status
    }
  }
`;

export const DELETE_STATE_DELIVERY_FEE = /* GraphQL */ `
  mutation deleteStateDeliveryFee($token: String!, $id: String!) {
    deleteStateDeliveryFee(token: $token, id: $id) {
      message
      status
    }
  }
`;

export const CREATE_PRODUCT_CHARGE = /* GraphQL */ `
  mutation createProductCharge($charge: Float!, $hasFixedAmount: Boolean, $token: String!) {
    createCharge(charge: $charge, hasFixedAmount: $hasFixedAmount, token: $token) {
      productCharge {
        id
        hasFixedAmount
        charge
      }
      status
      message
    }
  }
`;

export const UPDATE_PRODUCT_CHARGE = /* GraphQL */ `
  mutation updateProductCharge(
    $charge: Float!
    $hasFixedAmount: Boolean
    $token: String!
    $id: String!
  ) {
    updateCharge(charge: $charge, hasFixedAmount: $hasFixedAmount, token: $token, id: $id) {
      productCharge {
        id
        hasFixedAmount
        charge
      }
      status
      message
    }
  }
`;

export const GET_PRODUCT_CHARGE = /* GraphQL */ `
  query {
    getProductCharge {
      id
      hasFixedAmount
      charge
    }
  }
`;

export const UPDATE_DELIVERY_STATUS = /* GraphQL */ `
  mutation updateDeliveryStatus($deliveryStatus: String!, $orderId: String!) {
    updateDeliveryStatus(deliveryStatus: $deliveryStatus, orderId: $orderId) {
      status
      message
    }
  }
`;
