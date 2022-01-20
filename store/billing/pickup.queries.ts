export const PICKUPLOCATION = /* GRAPHQL */ `
  mutation pickupLocation($address: String!, $city: String!, $contact: String!, $name: String!, $state: String!) {
    pickupLocation(address: $address, city: $city, contact: $contact, name: $name, state: $state) {
      status
      message
    }
  }
`;
