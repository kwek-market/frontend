import { GraphQLClient, request } from "graphql-request";

const oldUrl = "https://kwekapi.com/v1/kwekql";
const newUrl = "https://kwekapi.herokuapp.com/v1/kwekql";

export const userFetcher = async (query: string, variables?: any) => {
  return await request(oldUrl, query, variables);
};

export const userFetcherWithAuth = async (
  query: string,
  variables: any,
  token: string
) => {
  const endpoint = oldUrl;

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
