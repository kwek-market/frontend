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
      message
    }
  }
`;

export const GET_USER = /* GraphQL */ `
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        fullName
      }
      token
      refreshToken
      verificationPrompt
      payloadString
      timeDiff
      status
      message
    }
  }
`;
