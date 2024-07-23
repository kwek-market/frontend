export const PAYMENTLINK = /* GRAPHQL */ `
  mutation paymentLink(    
    $amount: Float!
    $currency: String
    $description: String!
    $redirectUrl: String!
    $gateway: String!
    $token: String!
    ) {
      paymentLink(amount: $amount, currency: $currency, description: $description, redirectUrl: $redirectUrl, gateway: $gateway, token: $token) {
        status
        message
        paymentLink
      }
    }
`;

export const VERIFYPAYMENT = /* GRAPHQL */ `
  mutation verifyPayment($transactionRef: String!, $transactionId: String!) {
    verifyPayment(transactionId: $transactionId, transactionRef: $transactionRef) {
      status
      message
      transactionInfo
  }
}
`;
