export const START_SELLING = /* GraphQL */ `
  mutation StartSelling(
    $acceptedPolicy: Boolean!
    $firstname: String!
    $howYouHeardAboutUs: String!
    $landmark: String!
    $lastname: String!
    $lga: String!
    $phoneNumber: String!
    $shopAddress: String!
    $shopName: String!
    $shopUrl: String!
    $state: String!
    $token: String!
  ) {
    startSelling(
      acceptedPolicy: $acceptedPolicy
      firstname: $firstname
      howYouHeardAboutUs: $howYouHeardAboutUs
      landmark: $landmark
      lastname: $lastname
      lga: $lga
      phoneNumber: $phoneNumber
      shopAddress: $shopAddress
      shopName: $shopName
      shopUrl: $shopUrl
      state: $state
      token: $token
    ) {
      message
      status
    }
  }
`;

export const SELLER_VERIFICATION = /* GraphQL */ `
  mutation sellerVerification(
    $acceptedVendorPolicy: Boolean!
    $accountName: String!
    $accountNumber: String!
    $bankName: String!
    $bankSortCode: String!
    $bvn: String!
    $preferedId: String!
    $preferedIdUrl: String!
    $token: String!
  ) {
    sellerVerification(
      acceptedVendorPolicy: $acceptedVendorPolicy
      accountName: $accountName
      accountNumber: $accountNumber
      bankName: $bankName
      bankSortCode: $bankSortCode
      bvn: $bvn
      preferedId: $preferedId
      preferedIdUrl: $preferedIdUrl
      token: $token
    ) {
      status
      message
    }
  }
`;

export const SELLER_DATA = /* GRAPHQL */ `
  query sellerData($token: String!) {
    sellerData(token: $token) {
      firstname
      lastname
      phoneNumber
      shopName
      shopUrl
      shopAddress
      state
      city
      lga
      landmark
      howYouHeardAboutUs
      acceptedPolicy
      storeBannerUrl
      storeDescription
      preferedId
      preferedIdUrl
      bankName
      bankSortCode
      bankAccountNumber
      bankAccountName
      sellerIsVerified
      bankAccountIsVerified
      acceptedVendorPolicy
  }
}
`;

export const COMPLETE_SELLER_VERIFICATION = /* GraphQL */ `
  mutation completeSellerVerification($email: String!) {
    completeSellerVerification(email: $email) {
      status
      message
    }
  }
`;

export const GET_SELLER_PRODUCTS = `
  query getSellerProducts($token: String!) {
    getSellerProducts(token: $token) {
      id
      productTitle
      promoted
      shortDescription
      color
      image {
        imageUrl
      }
      options {
        price
        discountedPrice
        size
      }
      productRating {
        rating
        review
        likes
      }
    }
  }
`;

export const GET_SELLER_ORDERS = `
  query getSellerOrders($token: String!, $thisMonth: Boolean) {
    getSellerOrders(token: $token, thisMonth: $thisMonth) {
      order {
        id
        deliveryStatus
      }
      created
      customer {
        fullName
      }
      total
      profit
      paid
      status
    }
  }
`;

export const FUND_WALLET = `
  mutation fundWallet($paymentRef: String!, $remark: String!, $token: String!) {
    fundWallet(paymentRef: $paymentRef, remark: $remark, token: $token) {
      status
      message
    }
  }
`;

export const WITHDRAW_FROM_WALLET = `
  mutation withdrawFromWallet($amount: Int!, $password: String!, $token: String!) {
    withdrawFromWallet(amount: $amount, password: $password, token: $token) {
      status
      message
    }
  }
`;

export const GET_SELLER_WALLET = `
  query getSellerWallet($token: String!) {
    getSellerWallet(token: $token) {
      id
      owner {
        firstName
        lastName
      }
      balance
      transaction {
        id
        amount
        date
        remark
        transactionType
        status
      }    
    }
  }
`;

export const GET_SELLER_TRANSACTIONS = `
  query getSellerWalletTransactions($token: String!) {
    getSellerWalletTransactions(token: $token) {
      id
      status
      remark
      amount
      date
      transactionType
      wallet {
        balance
      }
    }
  }
`;

export const GET_SELLER_REVENUE_CHART_DATA = `
  query getSellerRevenueChartData($token: String!) {
    getSellerRevenueChartData(token: $token) 
  }
`;

export const WALLET_TRANSACTION_SUCCESS = `
  mutation walletTransactionSuccess($token: String!) {
    walletTransactionSuccess(token: $token) {
      status
      message
    }
  }
`;

export const CREATE_COUPON = `
  mutation createCoupon($code: String!, $days: Int!, $validUntil: DateTime, $value: Int! ) { 
    createCoupon(code: $code, days: $days, validUntil: $validUntil, value: $value) {
      status
      message
    }
  }
`;

export const APPLY_COUPON = `
  mutation applyCoupon($couponId: String!, $token: String!) {
    applyCoupon(couponId: $couponId, token: $token) {
      status
      message
    }
   }
`;

export const UNAPPLY_COUPON = `
  mutation unapplyCoupon($couponId: [String]!, $token: String!) {
    unapplyCoupon(couponId: $couponId, token: $token) {
      status
      message
    }
   }
`;

export const STORE_BANNER = `
  mutation storeBanner($imageUrl: String!, $storeDescription: String!, $token: String!) {
    storeBanner(imageUrl: $imageUrl, storeDescription: $storeDescription, token: $token) {
      status
      message
    }
  }
`;

export const STORE_LOCATION_UPDATE = `
  mutation storeLocationUpdate(
    $city: String!
    $landmark: String!
    $lga: String!
    $shopAddress: String!
    $state: String!
    $token: String!
  ) {
    storeLocationUpdate(
      city: $city
      landmark: $landmark
      lga: $lga
      shopAddress: $shopAddress
      state: $state
      token:$token
    ) {
      status
      message
    }
  }
`;

export const GET_SELLER_REVIEW = `
  query getSellerReview($token: String!) {
    getSellerReview(token: $token) {
      id
      product {
        sales {
          id
          date
        }
      }
      rating
      review
      likes
      dislikes
      ratedAt
      comment {
        id
      }
    }
  }
`;

export const GET_SELLER_PROMOTED_PRODUCTS = `
  query getSellerPromotedProducts($token: String!) {
    getSellerPromotedProducts(token: $token) {
      id
      clicks
      productTitle
      image {
        id
        imageUrl
      }
      options {
        id
        price
        discountedPrice
        optionTotalPrice
      }
      promo {
        active
        reach
        linkClicks
        days
      }
    }
  }
`;

export const CREATE_INVOICE = `
  mutation createInvoice(
    $customerAddress: String!
    $customerEmail: String!
    $customerName: String!
    $deliveryFee: Int!
    $note: String
    $purchasedItem: [String]!
    $subtotal: Int!
    $token: String!
    $total: Int!
    ) {
      createInvoice(
        customerAddress: $customerAddress
        customerEmail: $customerEmail
        customerName: $customerName
        deliveryFee: $deliveryFee
        note: $note
        purchasedItem: $purchasedItem
        subtotal: $subtotal
        token: $token
        total: $total
        ) {
          status
          message
          invoice {
            id
          }
        }
      }
    
`;

export const GET_SELLER_INVOICE = `
  query getSellerInvoices($token: String!) {
    getSellerInvoices(token: $token) {
      
        id
        store {
          id
          storeName
          email
          address
        }
        customerName
        customerEmail
        customerAddress
        deliveryFee
        subtotal
        total
        invoiceNumber
        issueDate
        note
        purchasedItem {
          id
          item
          description
          quantity
          unitCost
          total
        }
      
    }
  }
`;

export const GET_SELLER_PRODUCT_QUALITY = `
  query getSellerProductQuality($token: String!) {
    getSellerProductQuality(token: $token)
  }
`;

export const GET_SELLER_DELIVERY_RATE = `
  query getSellerDeliveryRate($token: String!) {
    getSellerDeliveryRate(token: $token)
  }
`;

export const GET_SELLER_SUCCESSFUL_SALES = `
  query getSellerSuccessfulSales($token: String!) {
    getSellerSuccessfulSales(token: $token) {
      id
      product{
        id
      }
      amount
      date
    }
  }
`;

export const GET_SELLER_DAYS_SELLING = `
  query getSellerDaysSelling($token: String!) {
    getSellerDaysSelling(token: $token)
  }
`;

export const GET_SELLER_SALES_EARNINGS = `
  query getSellerSalesEarnings($token: String!) {
    getSellerSalesEarnings(token: $token)
  }
`;

export const GET_SELLER_CUSTOMERS = `
  query getSellerCustomers($token: String!) {
    getSellerCustomers(token: $token)
  }
`;

export const GET_SELLERS_INVOICE = `
  query getSellerInvoice($invoiceId: String!, $token: String!) {
    getSellerInvoice(invoiceId: $invoiceId, token: $token) {
      id
      store {
        storeName
        email
        address
      }
      customerName
      customerEmail
      customerAddress
      deliveryFee
      subtotal
      total
      invoiceNumber
      issueDate
      note
      purchasedItem {
        item
        description
        quantity
        unitCost
        total
      }
    }
  }
`;
