import classNames from "classnames";

export const classnames = (...args: string[]) => classNames(...args);

export function delay(timeMs: number) {
  return new Promise((resolve) => setTimeout(resolve, timeMs));
}
