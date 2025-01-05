import { getLangDir } from "rtl-detect";

// TODO: Getting proper direction according to locale used
export const direction = lang =>
  lang.includes("arab") || lang.includes("Arab") || lang.includes("hebr") || lang.includes("Hebr")
    ? "rtl"
    : getLangDir(lang);
