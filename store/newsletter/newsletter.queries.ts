export const SUBCRIBE = /* GraphQL */ `
  mutation createSubscriber($email: String!) {
    createSubscriber(email: $email) {
      subscriber {
        id
        email
      }
      message
      status
    }
  }
`;
