import { GraphQLClient, request } from "graphql-request";

export const userFetcher = async (query: string, variables: any) => {
  return await request(`http://kwekapi.com/v1/users_auth`, query, variables);
};

export const userFetcherWithAuth = async (query: string, variables: any) => {
  const endpoint = "http://kwekapi.com/v1/users_auth";

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    .split("=")[1];

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return await graphQLClient.request(query, variables);
};

