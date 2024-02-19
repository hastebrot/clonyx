import clsx, { type ClassValue } from "clsx";

export const className = (...inputs: ClassValue[]): { className: string } => {
  return { className: clsx(inputs) };
};

export { clsx as classNames };
