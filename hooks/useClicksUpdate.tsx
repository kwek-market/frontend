import { userFetcher } from "@/helpers";
import { ClicksPayload } from "@/interfaces/commonTypes";
import { CLICKS_UPDATE } from "@/store/seller/seller.queries";
import { useMutation } from "react-query";

export default function useClicksUpdate() {
  return useMutation((payload: ClicksPayload) => userFetcher(CLICKS_UPDATE, payload))
}