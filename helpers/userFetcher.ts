import { GraphQLClient, request } from "graphql-request";

// const oldUrl = "https://kwekapi.com/v1/kwekql";
// const newUrl = "https://kwekapi.herokuapp.com/v1/kwekql";
// https://kwekapi.vercel.app/v1/kwekql
const graphqlEndpoint = "https://kwekapi.vercel.app/v1/kwekql";
// const graphqlEndpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

export const userFetcher = async (query: string, variables?: any) => {
  return await request(graphqlEndpoint, query, variables);
};

export const userFetcherWithAuth = async <T>(
  query: string,
  variables: T,
  token: string
) => {
  const endpoint = graphqlEndpoint;

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
