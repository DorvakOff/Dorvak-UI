import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function uniqueId(prefix: string = '') {
  let id = Math.random().toString(36).slice(2, 11);

  if (prefix) {
    return `${prefix}-${id}`;
  }

  return id;
}
