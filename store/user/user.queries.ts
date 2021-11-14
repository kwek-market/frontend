export const CREATE_USER = /* GraphQL */ `
  mutation createUser($email: String!, $fullName: String!, $password1: String!, $password2: String!) {
    createUser(email: $email, fullName: $fullName, password1: $password1, password2: $password2) {
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
        password
        isSuperuser
      }
      token
      status
      message
    }
  }
`;

export const GET_USER = /* GraphQL */ `
  query user($id: ID!) {
    user(id: $id) {
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
  mutation resendVerificationEmail($email: String!) {
    resendVerificationEmail(email: $email) {
      message
      status
    }
  }
`;

export const RESET_PASSWORD = /* GraphQL */ `
  mutation resetPassword($email: String!, $password1: String!, $password2: String!, $token: String!) {
    resetPassword(email: $email, password1: $password1, password2: $password2, token: $token) {
      message
      status
    }
  }
`;

export const RESET_PASSWORD_REQUEST = /* GraphQL */ `
  mutation resetPasswordRequest($email: String!) {
    resetPasswordRequest(email: $email) {
      message
      status
    }
  }
`;

export const UPDATE_PASSWORD = /* GraphQL */ `
  mutation updatePassword($oldPassword: String!, $newPassword1: String!, $newPassword2: String!, $token: String!) {
    updatePassword(oldPassword: $oldPassword, newPassword1: $newPassword1, newPassword2: $newPassword2, token: $token) {
      message
      status
    }
  }
`;

export const UPDATE_USER_PROFILE = /* GraphQL */ `
  mutation updateUserProfile($firstName: String!, $lastName: String!, $phoneNumber: String!, $token: String!) {
    updateUserProfile(firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, token: $token) {
      message
      status
    }
  }
`;
