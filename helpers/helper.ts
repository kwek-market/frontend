import { userFetcherWithAuth } from "./userFetcher";
import { VERIFY_TOKEN } from "@/store/user/user.queries";

export function getInitials(name: string) {
  const names = name.split(" ");
  return names.map((n) => n[0]).join("");
}

export function getInitials2(str: string) {
  const matches = str.match(/\b(\w)/g);
  return matches.join("");
}

export function verifyTokenFunc(token: string) {
  return userFetcherWithAuth(VERIFY_TOKEN, { token: token });
}

export function emailValidator(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const PASSWORDREGEX: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])[A-Za-z\d@#$!%*?&-]{8,}$/;

export function passwordValidator(password: string) {
  return PASSWORDREGEX.test(password);
}

export function passwordMatch(password1: string, password2: string) {
  return password1 === password2 ? true : false;
}
