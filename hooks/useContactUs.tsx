import { userFetcher } from "@/helpers";
import { ContactUs } from "@/interfaces/commonTypes";
import { CONTACT_US } from "@/store/user/user.queries";
import { useMutation } from "react-query";

export default function useContactUs() {
  return useMutation((payload: ContactUs) => userFetcher(CONTACT_US, payload));
}
