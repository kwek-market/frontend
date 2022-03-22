import { userFetcher, userFetcherWithAuth } from "./userFetcher";
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
  return userFetcher(VERIFY_TOKEN, { token });
}

export function emailValidator(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const PASSWORDREGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&-])[A-Za-z\d@#$!%*?&-]{8,}$/;

export function passwordValidator(password: string) {
  return PASSWORDREGEX.test(password);
}

export function passwordMatch(password1: string, password2: string) {
  return password1 === password2;
}

export async function getIp() {
  const myIp = await (await fetch("https://api.ipify.org")).text();
  return myIp;
}

export const even = (index: number) => (index % 2 !== 0 ? "tw-bg-gray-kwek700" : "");

export function updateClicks(productId: string, token: string, mutate: any) {
  mutate({ productId, token });
}

// create a countdown timer given two dates to count from
export function countdown(start: Date, end: Date) {
  const diff = end.getTime() - start.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}