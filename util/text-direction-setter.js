import { getLangDir } from "rtl-detect";

// TODO: Getting proper direction according to locale used
export const direction = lang =>
  lang.includes("arab") ||
  lang.includes("Arab") ||
  lang.includes("hebr") ||
  lang.includes("Hebr") ||
  (lang.startsWith("ks") && (!lang.includes("deva") || !lang.includes("Deva"))) ||
  lang.startsWith("syc") ||
  (lang.startsWith("skr") && (!lang.includes("deva") || !lang.includes("Deva")))
    ? "rtl"
    : lang.startsWith("ku-latn") || lang.startsWith("ku-Latn")
    ? "ltr"
    : getLangDir(lang);
