import { KeyboardEvent, MouseEvent } from "react";

function triggerCallbackOnClickOrOnKeydown(
  e: MouseEvent | KeyboardEvent,
  callback: () => void,
) {
  if (e.type === "click") return callback();

  const keyboardEvent = e as KeyboardEvent;
  if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") callback();
}

function getAttribute(
  e: MouseEvent,
  closest: string,
  attribute: string,
): string {
  const { target } = e;

  const element = (target as HTMLAreaElement).closest(closest);
  return element?.getAttribute(attribute) ?? "";
}

function getClientIP(headersList: Headers) {
  const xForwardedFor = headersList.get("x-forwarded-for");
  return xForwardedFor ? xForwardedFor.split(",")[0] : "127.0.0.1";
}

function cleanString(
  str: string,
  charsToRepalce: Record<string, string> = { " ": "-", ":": "", "&": "" },
  toCase: "LOWER" | "UPPER" = "LOWER",
  encodedURI: boolean = true,
) {
  function getStr(str: string) {
    switch (toCase) {
      case "LOWER":
        return str.toLowerCase();
      case "UPPER":
        return str.toUpperCase();
      default:
        return str;
    }
  }

  let result = str;
  for (const [char, replacement] of Object.entries(charsToRepalce))
    result = result.split(char).join(replacement);

  return encodedURI ? encodeURIComponent(getStr(result)) : getStr(result);
}

function getCompactNotation(value: string | number) {
  if (typeof value === "string") {
    value = parseInt(value, 10);
    if (isNaN(value)) {
      throw new Error(
        "Invalid number input: Unable to parse string to a valid number",
      );
    }
  }

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value);
}

export {
  triggerCallbackOnClickOrOnKeydown,
  getAttribute,
  getClientIP,
  cleanString,
  getCompactNotation,
};
