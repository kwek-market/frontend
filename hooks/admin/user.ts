import { useQuery } from "react-query";
import { userFetcherWithAuth } from "../../helpers";
import { GET_USER_BY_ID } from "../../store/admin/admin.queries";

interface IdAndTokenPayload {
  id: string;
  token: string;
}

export function userGetUserById(payload: IdAndTokenPayload) {
  return useQuery(
    ["user",  payload.id],
    () => userFetcherWithAuth(GET_USER_BY_ID, payload, payload.token),
    {
      keepPreviousData: false,
      enabled: !!payload.id,
    }
  );
}