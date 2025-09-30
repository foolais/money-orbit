import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumberInput = (value: string): string => {
  const numericValue = value.replace(/\D/g, "");

  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const parseFormattedNumber = (formattedValue: string): number => {
  return parseInt(formattedValue.replace(/\D/g, "")) || 0;
};

export const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB");
};

export const formatRupiah = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};
