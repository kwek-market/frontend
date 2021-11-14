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
  mutation sellerData($token: String!) {
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
      bvn
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
