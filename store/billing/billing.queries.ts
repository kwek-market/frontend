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

export const BILLINGADDRESSDELETE = `
  mutation billingAddressDelete($addressId: String!) {
    billingAddressDelete(addressId: $addressId) {
      status
      message
    }
  }
`

export const BILLINGADDRESSUPDATE = `
mutation billingAddressUpdate(
  $address: String
  $addressId: String!
  $city: String
  $contact: String
  $fullName: String
  $state: String
) {
  billingAddressUpdate(
    address: $address
    addressId: $addressId
    city: $city
    contact: $contact
    fullName: $fullName
    state: $state
  ) {
    status
    message
  }
}
`