import { userFetcher } from "@/helpers";
import { USER_NOTIFICATIONS } from "@/store/user/user.queries";
import { useQuery } from "react-query";

export default function useNotifications(token: string) {
  return useQuery("notifications", () =>
    userFetcher(USER_NOTIFICATIONS, { token: token })
  );
}
