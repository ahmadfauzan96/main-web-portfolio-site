const configOptions = (timeZone, hour12) => ({
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "2-digit",
  timeZone,
  hour12,
});

// * format date: yyyy-mm-dd || yyyy/mm/dd || yyyy-m-d || yyyy/m/d
// * format time: hh:mm || h:mm
export const formatDateTimeID = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("id-ID", configOptions(timeZone, false));
export const formatDateTimeMS = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ms-SG", configOptions(timeZone, true));
export const formatDateTimeEN = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("en-SG", configOptions(timeZone, true));
export const formatDateTimeES = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("es-MX", configOptions(timeZone, true));
export const formatDateTimeFR = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("fr-FR", configOptions(timeZone, false));
export const formatDateTimeFRCA = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("fr-CA", configOptions(timeZone, true));
export const formatDateTimeDE = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("de-DE", configOptions(timeZone, false));
export const formatDateTimeNO = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("no-NO", configOptions(timeZone, true));
export const formatDateTimeNB = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("nb-NO", configOptions(timeZone, true));
export const formatDateTimeNN = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("nn-NO", configOptions(timeZone, true));
export const formatDateTimeNL = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("nl-NL", configOptions(timeZone, false));
export const formatDateTimeEO = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("eo-ID", configOptions(timeZone, true));
export const formatDateTimeJA = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString(
    "ja-JP-u-ca-japanese",
    configOptions(timeZone, true)
  );
export const formatDateTimeKO = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ko-KR", configOptions(timeZone, true));
export const formatDateTimeZHS = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("zh-hans-SG", configOptions(timeZone, true));
export const formatDateTimeZHT = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("zh-hant-TW", configOptions(timeZone, true));
export const formatDateTimeYUE = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("yue-HK", configOptions(timeZone, true));
export const formatDateTimeTH = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("th-TH", configOptions(timeZone, true));
export const formatDateTimeVI = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("vi-VN", configOptions(timeZone, true));
export const formatDateTimeHI = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("hi-IN", configOptions(timeZone, false));
export const formatDateTimeMR = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("mr-IN", configOptions(timeZone, false));
export const formatDateTimeNE = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ne-NP", configOptions(timeZone, true));
export const formatDateTimeSA = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("sa-IN", configOptions(timeZone, true));
export const formatDateTimeTA = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ta-SG", configOptions(timeZone, false));
export const formatDateTimeML = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ml-IN", configOptions(timeZone, false));
export const formatDateTimeAR = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ar-SA", configOptions(timeZone, true));
export const formatDateTimeFA = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("fa-IR", configOptions(timeZone, true));
export const formatDateTimeUR = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString(
    "ur-PK-u-nu-arabext",
    configOptions(timeZone, false)
  );
export const formatDateTimePS = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ps-AF", configOptions(timeZone, true));
export const formatDateTimeUG = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("ug-CN", configOptions(timeZone, true));
export const formatDateTimeHE = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("he-PS", configOptions(timeZone, true));
export const formatDateTimeYI = (date, time, timeZone) =>
  new Date(`${date}, ${time}`).toLocaleDateString("yi-DE", configOptions(timeZone, true));

export const formatDateTime = (locale, date, time, timeZone) =>
  locale === "id"
    ? formatDateTimeID(date, time, timeZone)
    : locale === "ms"
    ? formatDateTimeMS(date, time, timeZone)
    : locale === "es"
    ? formatDateTimeES(date, time, timeZone)
    : locale === "fr"
    ? formatDateTimeFR(date, time, timeZone)
    : locale === "fr-CA"
    ? formatDateTimeFRCA(date, time, timeZone)
    : locale === "de"
    ? formatDateTimeDE(date, time, timeZone)
    : locale === "no"
    ? formatDateTimeNO(date, time, timeZone)
    : locale === "nb"
    ? formatDateTimeNB(date, time, timeZone)
    : locale === "nn"
    ? formatDateTimeNN(date, time, timeZone)
    : locale === "nl"
    ? formatDateTimeNL(date, time, timeZone)
    : locale === "eo"
    ? formatDateTimeEO(date, time, timeZone)
    : locale === "ja"
    ? formatDateTimeJA(date, time, timeZone)
    : locale === "ko"
    ? formatDateTimeKO(date, time, timeZone)
    : locale === "zh-hans"
    ? formatDateTimeZHS(date, time, timeZone)
    : locale === "zh-hant"
    ? formatDateTimeZHT(date, time, timeZone)
    : locale === "yue"
    ? formatDateTimeYUE(date, time, timeZone)
    : locale === "th"
    ? formatDateTimeTH(date, time, timeZone)
    : locale === "vi"
    ? formatDateTimeVI(date, time, timeZone)
    : locale === "hi"
    ? formatDateTimeHI(date, time, timeZone)
    : locale === "mr"
    ? formatDateTimeMR(date, time, timeZone)
    : locale === "ne"
    ? formatDateTimeNE(date, time, timeZone)
    : locale === "sa"
    ? formatDateTimeSA(date, time, timeZone)
    : locale === "ta"
    ? formatDateTimeTA(date, time, timeZone)
    : locale === "ml"
    ? formatDateTimeML(date, time, timeZone)
    : locale === "ar"
    ? formatDateTimeAR(date, time, timeZone)
    : locale === "fa"
    ? formatDateTimeFA(date, time, timeZone)
    : locale === "ur"
    ? formatDateTimeUR(date, time, timeZone)
    : locale === "ps"
    ? formatDateTimePS(date, time, timeZone)
    : locale === "ug"
    ? formatDateTimeUG(date, time, timeZone)
    : locale === "he"
    ? formatDateTimeHE(date, time, timeZone)
    : locale === "yi"
    ? formatDateTimeYI(date, time, timeZone)
    : locale === "en" && formatDateTimeEN(date, time, timeZone);
