import { request } from "graphql-request";

const fetcher = (query: any, variables: any) => {
  console.log(query, variables);
  return request(`http://kwekapi.com/v1/graphql`, query, variables);
};

export default fetcher;
