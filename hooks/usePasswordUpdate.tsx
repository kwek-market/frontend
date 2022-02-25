import { userFetcherWithAuth } from "@/helpers";
import { USER_PASSWORD_UPDATE } from "@/store/user/user.queries";
import { useMutation } from "react-query";

export type UpdatePassword = {
  currentPassword: string;
  newPassword: string;
  token: string;
};

export default function usePasswordUpdate(token: string) {
  return useMutation((payload: UpdatePassword) =>
    userFetcherWithAuth(USER_PASSWORD_UPDATE, payload, token)
  );
}
