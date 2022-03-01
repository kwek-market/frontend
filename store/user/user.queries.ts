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
  mutation loginUser($email: String!, $password: String!, $ip: String!) {
    loginUser(email: $email, password: $password, ip: $ip) {
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
        sellerprofileSet {
          id
        }
        orderSet {
          orderId
        }
        productSet {
          id
          productTitle
        }
        ratingSet {
          id
          rating
          review
          likes
          dislikes
          ratedAt
        }
        userWish {
          id
          createdAt
          wishlistItem {
            id
            product {
              id
              productTitle
            }
          }
        }
        billingSet {
          id
          fullName
          contact
          address
          state
          city
        }
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
      isSuperuser
      sellerprofileSet {
        id
      }
      orderSet {
        orderId
      }
      productSet {
        id
        productTitle
      }
      ratingSet {
        id
        rating
        review
        likes
        dislikes
        ratedAt
      }
      userWish {
        id
        createdAt
        wishlistItem {
          id
          product {
            id
            productTitle
          }
        }
      }
      billingSet {
        id
        fullName
        contact
        address
        state
        city
      }
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

export const USER_PASSWORD_UPDATE = `
  mutation userPasswordUpdate(
    $currentPassword: String!,
    $newPassword: String!,
    $token: String!
  ) {
    userPasswordUpdate(
      currentPassword: $currentPassword, 
      newPassword: $newPassword, 
      token: $token) {
        status
        message
    }
  }`;

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

export const USER_NOTIFICATIONS = `
  query userNotifications($token: String!) {
    userNotifications(token: $token) {
      id
      message
      subject
      read
      createdAt
      notification {
        id
      }
    }
  }
`;

export const READ_NOTIFICATIONS = `
  mutation readNotification(
    $messageId: String!
    $notificationId: String!
    $token: String!
    ) {
      readNotification(
        messageId: $messageId
        notificationId: $notificationId
        token: $token
      ) {
        status
        message
      }
    }
`;
