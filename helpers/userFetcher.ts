// @ts-expect-error "Because of it is not seeing the graphql-request"
import { GraphQLClient, request } from "graphql-request";

const graphqlEndpoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

// const graphqlEndpoint = "https://backend-smwz.onrender.com/v1/graphql";

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
