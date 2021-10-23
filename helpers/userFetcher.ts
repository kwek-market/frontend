import { GraphQLClient, request } from "graphql-request";

export const userFetcher = async (query: string, variables: any) => {
  return await request(`https://kwekapi.com/v1/kwekql`, query, variables);
};

export const userFetcherWithAuth = async (
  query: string,
  variables: any,
  headerToken?: any
) => {
  const endpoint = "https://kwekapi.com/v1/kwekql";

  let token = headerToken;

  if (!token) {
    token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      .split("=")[1];
  }

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return await graphQLClient.request(query, variables);
};
