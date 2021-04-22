export const CREATE_USER = /* GraphQL */ `
  mutation createUser(
    $email: String!
    $fullName: String!
    $password1: String!
    $password2: String!
  ) {
    createUser(
      email: $email
      fullName: $fullName
      password1: $password1
      password2: $password2
    ) {
      user {
        id
        firstName
        lastName
        email
      }
      status
    }
  }
`;
