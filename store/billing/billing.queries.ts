export const BILLINGADDRESS = /* GraphQL */ `
  mutation billingAddress(
    $address: String!
    $city: String!
    $contact: String!
    $fullName: String!
    $state: String!
    $token: String
  ) {
    billingAddress(
      address: $address
      city: $city
      contact: $contact
      fullName: $fullName
      state: $state
      token: $token
    ) {
      status
      message
      billingAddress {
        id
      }
    }
  }
`;
