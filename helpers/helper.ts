import { VERIFY_TOKEN } from "@/store/user/user.queries";
import dayjs from "dayjs";
import { userFetcher } from "./userFetcher";

export function getInitials(name: string) {
  const names = name.split(" ");
  return names.map(n => n[0]).join("");
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

export const reduceCharacterLength = (text: string, lenght: number): string => {
  return text.length > lenght ? `${text.slice(0, lenght)}...` : text;
};

export function generatePagesArray(
  length: number,
  currentPage: number,
  totalPages: number
): number[] | null {
  // Check if i is within the valid range
  if (currentPage < 1 || currentPage > totalPages) {
    console.error("Invalid value for i. It should be between 1 and m.");
    return null;
  }

  // Calculate the minimum and maximum values for the array elements
  const min = Math.max(1, currentPage - Math.floor(length / 2));
  const max = Math.min(totalPages, min + length - 1);

  // Generate the array
  const result = Array.from({ length: length }, (_, index) => {
    const v = min + index;
    if (v <= max) {
      return v;
    }
    return;
  });

  return result.filter((value, i) => value != undefined);
}

export function debounce(func: any, timeout: number = 300) {
  let timer: NodeJS.Timer;
  return (...args) => {
    console.log("🚀 ~~ return ~~ args:", args);

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function deletePropertyNullUndefined(obj: { [key: string]: any }) {
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  }
}

export function getMonthDateRange(dayJsDate: dayjs.Dayjs) {
  // Current month
  const currentMonthStart = dayJsDate.startOf("month");
  const currentMonthEnd = dayJsDate.endOf("month");

  // Last month
  // const lastMonthStart = dayjs().subtract(1, "month").startOf("month");
  // const lastMonthEnd = dayjs().subtract(1, "month").endOf("month");

  return {
    start: currentMonthStart.format("YYYY-MM-DD"),
    end: currentMonthEnd.format("YYYY-MM-DD"),
  };
}


// make a function to separate a string into an array of words
export function separateWords(text: string) {
  return text.split(",");
}
