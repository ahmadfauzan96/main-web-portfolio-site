export const addCommaLGC = (array, element) => (element !== array.slice(-1)[0] ? ", " : "");
export const addCommaARA = (array, element) => (element !== array.slice(-1)[0] ? "، " : "");
export const addCommaJPN = (array, element) => (element !== array.slice(-1)[0] ? "、" : "");
export const addCommaZHO = (array, element) => (element !== array.slice(-1)[0] ? "，" : "");

export const addComma = (lang, array, element) =>
  lang.includes("ja")
    ? addCommaJPN(array, element)
    : lang.includes("zh") || lang.includes("yue")
    ? addCommaZHO(array, element)
    : lang.includes("arab") ||
      lang.includes("Arab") ||
      lang.includes("ar") ||
      lang.includes("fa") ||
      lang.includes("ur") ||
      lang.includes("ug")
    ? addCommaARA(array, element)
    : addCommaLGC(array, element);
