import { userFetcher } from "@/helpers";
import { DEALS_OF_THE_DAY } from "@/store/seller/seller.queries";
import { useQuery } from "react-query";

export default function useDealsOfTheDay() {
  return useQuery(
    "dealsoftheday",
    () => userFetcher(DEALS_OF_THE_DAY) as Promise<Record<string, any>>
  );
}
