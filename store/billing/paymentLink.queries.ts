export const PAYMENTLINK = /* GRAPHQL */ `
  mutation paymentLink(    
    $amount: Float!
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
  mutation verifyPayment($paymentRef: String!, $transactionId: Int!) {
    verifyPayment(transactionId: $transactionId, paymentRef: $paymentRef) {
      status
      message
      transactionInfo
  }
}
`;
