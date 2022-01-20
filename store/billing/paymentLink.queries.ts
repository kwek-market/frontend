export const PAYMENTLINK = /* GRAPHQL */ `
  mutation paymentLink(    
    $amount: Int!
    $currency: String
    $description: String!
    $token: String!
    ) {
      paymentLink(amount: $amount, currency: $currency, description: $description, token: $token) {
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
