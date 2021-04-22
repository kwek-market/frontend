import { request } from "graphql-request";

// const fetcher = (query: object) =>
//   fetch("http://kwekapi.com/v1/graphql", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then((res) => res.json())
//     .then((json) => json.data);

const fetcher = (query: any, variables: any) => {
  console.log(query, variables);
  return request(`http://kwekapi.com/v1/graphql`, query, variables);
};

export default fetcher;
