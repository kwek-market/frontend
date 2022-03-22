import { userFetcher } from "@/helpers";
import { ReadNotificationType } from "@/interfaces/commonTypes";
import { READ_NOTIFICATIONS } from "@/store/user/user.queries";
import { useMutation } from "react-query";

export default function useReadNotifications() {
  return useMutation((payload: ReadNotificationType) =>
    userFetcher(READ_NOTIFICATIONS, payload)
  );
}
