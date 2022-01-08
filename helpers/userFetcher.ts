import { GraphQLClient, request } from "graphql-request";

export const userFetcher = async (query: string, variables?: any) => {
  return await request(`https://kwekapi.com/v1/kwekql`, query, variables);
};

export const userFetcherWithAuth = async (
  query: string,
  variables: any,
  token: string
) => {
  const endpoint = "https://kwekapi.com/v1/kwekql";

  if (token === "" || token === undefined) {
    throw new Error("No token provided");
  }

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return await graphQLClient.request(query, variables);
};
