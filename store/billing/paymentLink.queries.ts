export const PAYMENTLINK = /* GRAPHQL */ `
  mutation paymentLink(    
    $amount: Int!
    $currency: String
    $description: String!
    $redirectUrl: String!
    $token: String!
    ) {
      paymentLink(amount: $amount, currency: $currency, description: $description, redirectUrl: $redirectUrl, token: $token) {
        status
        message
        paymentLink
      }
    }
`;

export const VERIFYPAYMENT = /* GRAPHQL */ `
  mutation verifyPayment($transactionId: Int!) {
    verifyPayment(transactionId: $transactionId) {
      status
      message
      transactionInfo
  }
}
`;
