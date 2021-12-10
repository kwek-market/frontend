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
      status
      message
      emailText
    }
  }
`;

export const LOGIN_USER = /* GraphQL */ `
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        lastLogin
        username
        firstName
        lastName
        isStaff
        isActive
        dateJoined
        email
        fullName
        phoneNumber
        isVerified
        isSeller
        isSuperuser
      }
      token
      status
      message
    }
  }
`;

export const GET_USER = /* GraphQL */ `
  query userData($token: String) {
    userData(token: $token) {
      id
      lastLogin
      username
      firstName
      lastName
      isStaff
      isActive
      dateJoined
      email
      fullName
      phoneNumber
      isVerified
      isSeller
      password
      isSuperuser
    }
  }
`;

export const USER_ACCOUNT_UPDATE = /* GraphQL */ `
  mutation userAccountUpdate(
    $newEmail: String!
    $newFirstName: String!
    $newLastName: String!
    $newPhoneNumber: String!
    $token: String!
  ) {
    userAccountUpdate(
      newEmail: $newEmail
      newFirstName: $newFirstName
      newLastName: $newLastName
      newPhoneNumber: $newPhoneNumber
      token: $token
    ) {
      message
      token
      status
    }
  }
`;

export const VERIFY_TOKEN = /* GraphQL */ `
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      message
      status
    }
  }
`;

export const RESEND_VERIFICATION_EMAIL = /* GraphQL */ `
  mutation sendPasswordResetEmail($email: String!) {
    sendPasswordResetEmail(email: $email) {
      message
      status
    }
  }
`;

export const RESET_PASSWORD = /* GraphQL */ `
  mutation changePassword(
    $password1: String!
    $password2: String!
    $token: String!
  ) {
    changePassword(
      password1: $password1
      password2: $password2
      token: $token
    ) {
      message
      status
    }
  }
`;

