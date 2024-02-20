import clsx, { type ClassValue } from "clsx";

export { clsx as classNames };

export const classNamesUniq = (...inputs: ClassValue[]): string => {
  function parseCssVariableOrNull(input: string) {
    if (input.startsWith("[--") && input.includes(":")) {
      return input.slice(1, input.indexOf(":"));
    }
    return null;
  }

  const items = clsx(...inputs).split(" ");
  const resultItems: string[] = [];
  const cssVariablesSet = new Set<string>();
  for (const item of items.reverse()) {
    const cssVariable = parseCssVariableOrNull(item);
    if (cssVariable !== null) {
      if (cssVariablesSet.has(cssVariable)) {
        continue;
      }
      cssVariablesSet.add(cssVariable);
    }
    resultItems.push(item);
  }
  return resultItems.reverse().join(" ");
};
