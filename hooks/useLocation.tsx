import { useQuery } from "react-query";

async function fetcher(address: string) {
  const url = `${process.env.NEXT_PUBLIC_GEOCODING_URL}?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
  try {
    return await (await fetch(url)).json();
  } catch (err) {}
}

export default function useLocation(address: string) {
  return useQuery(
    ["location"],
    () => fetcher(address) as Promise<Record<string, any>>
  );
}
