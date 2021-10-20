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

export const LOGIN_USER = /* GraphQL */ `
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        email
        fullName
        isVerified
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

export const GET_USER = /* GraphQL */ `
  query user($id: ID!) {
    user(id: $id) {
      id
      username
      email
      fullName
      isVerified
      isActive
      isStaff
      dateJoined
      secondaryEmail
      verified
      lastLogin
    }
  }
`;
