export const addCommaLGC = (array, element) => (element !== array.slice(-1)[0] ? ", " : "");
export const addCommaARA = (array, element) => (element !== array.slice(-1)[0] ? "، " : "");
export const addCommaJPN = (array, element) => (element !== array.slice(-1)[0] ? "、" : "");
export const addCommaZHO = (array, element) => (element !== array.slice(-1)[0] ? "，" : "");

export const addComma = (lang, array, element) =>
  lang.startsWith("ja")
    ? addCommaJPN(array, element)
    : lang.startsWith("zh") || lang.startsWith("yue")
    ? addCommaZHO(array, element)
    : lang.startsWith("ar") ||
      lang.startsWith("fa") ||
      lang.startsWith("ur") ||
      (lang.startsWith("sd") && (!lang.includes("deva") || !lang.includes("Deva"))) ||
      (lang.startsWith("ku") &&
        (!lang.includes("latn") ||
          !lang.includes("Latn") ||
          !lang.includes("cyrl") ||
          !lang.includes("Cyrl"))) ||
      lang.startsWith("ps") ||
      lang.startsWith("ug") ||
      lang.startsWith("bcc") ||
      lang.startsWith("bqi") ||
      lang.startsWith("ckb") ||
      lang.startsWith("glk") ||
      lang.startsWith("mzn") ||
      lang.startsWith("pnb") ||
      lang.startsWith("prs") ||
      (lang.startsWith("skr") && (!lang.includes("deva") || !lang.includes("Deva"))) ||
      lang.includes("arab") ||
      lang.includes("Arab")
    ? addCommaARA(array, element)
    : addCommaLGC(array, element);
