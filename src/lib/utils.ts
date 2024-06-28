import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface UrlFormValues {
  originalUrl: string;
  shortUrl: string;
}
export interface TableData {
  originalUrl: string;
  shortUrl: string;
}

export const saveLocalStorage = (data: UrlFormValues) => {
  const storage = JSON.parse(localStorage.getItem("urls") || "[]");

  const itemToAdd = data;

  if (itemToAdd) {
    storage.push(itemToAdd);
  }

  localStorage.setItem("urls", JSON.stringify(storage));
};
