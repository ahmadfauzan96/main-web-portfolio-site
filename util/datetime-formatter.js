import { fromZonedTime } from "date-fns-tz";
const configOptions = (timeZone, hour12 = true) => ({
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "2-digit",
  // dateStyle: "full",
  // timeStyle: "full",
  hour12,
  timeZone,
});

// * format date: yyyy-mm-dd || yyyy/mm/dd || yyyy-m-d || yyyy/m/d
// * format time: hh:mm || hh:m || h:mm || h:m
export const formatDateTimeID = (date, time, tz) =>
  Intl.DateTimeFormat("id", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeMS = (date, time, tz) =>
  Intl.DateTimeFormat("ms", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeEN = (date, time, tz) =>
  Intl.DateTimeFormat("en", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeES = (date, time, tz) =>
  Intl.DateTimeFormat("es", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeFR = (date, time, tz) =>
  Intl.DateTimeFormat("fr", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeFRCA = (date, time, tz) =>
  Intl.DateTimeFormat("fr-CA", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeDE = (date, time, tz) =>
  Intl.DateTimeFormat("de", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeNO = (date, time, tz) =>
  Intl.DateTimeFormat("no", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeNB = (date, time, tz) =>
  Intl.DateTimeFormat("nb", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeNN = (date, time, tz) =>
  Intl.DateTimeFormat("nn", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeNL = (date, time, tz) =>
  Intl.DateTimeFormat("nl", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeEO = (date, time, tz) =>
  Intl.DateTimeFormat("eo", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeJA = (date, time, tz) =>
  Intl.DateTimeFormat("ja-u-ca-japanese", configOptions(tz)).format(
    fromZonedTime(`${date} ${time}`, tz)
  );
export const formatDateTimeKO = (date, time, tz) =>
  Intl.DateTimeFormat("ko", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeZH = (date, time, tz) =>
  Intl.DateTimeFormat("zh", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeZHS = (date, time, tz) =>
  Intl.DateTimeFormat("zh-Hans", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeZHT = (date, time, tz) =>
  Intl.DateTimeFormat("zh-Hant", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeYUE = (date, time, tz) =>
  Intl.DateTimeFormat("yue", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeTH = (date, time, tz) =>
  Intl.DateTimeFormat("th", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeVI = (date, time, tz) =>
  Intl.DateTimeFormat("vi", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeHI = (date, time, tz) =>
  Intl.DateTimeFormat("hi", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeMR = (date, time, tz) =>
  Intl.DateTimeFormat("mr", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeNE = (date, time, tz) =>
  Intl.DateTimeFormat("ne", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeSA = (date, time, tz) =>
  Intl.DateTimeFormat("sa", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeTA = (date, time, tz) =>
  Intl.DateTimeFormat("ta", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeML = (date, time, tz) =>
  Intl.DateTimeFormat("ml", configOptions(tz, false)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeAR = (date, time, tz) =>
  Intl.DateTimeFormat("ar-u-nu-arab", configOptions(tz)).format(
    fromZonedTime(`${date} ${time}`, tz)
  );
export const formatDateTimeFA = (date, time, tz) =>
  Intl.DateTimeFormat("fa", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeUR = (date, time, tz) =>
  Intl.DateTimeFormat("ur-u-nu-arabext", configOptions(tz, false)).format(
    fromZonedTime(`${date} ${time}`, tz)
  );
export const formatDateTimeSD = (date, time, tz) =>
  Intl.DateTimeFormat("sd", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimePS = (date, time, tz) =>
  Intl.DateTimeFormat("ps", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeUG = (date, time, tz) =>
  Intl.DateTimeFormat("ug", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeCKB = (date, time, tz) =>
  Intl.DateTimeFormat("ckb", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeHE = (date, time, tz) =>
  Intl.DateTimeFormat("he", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));
export const formatDateTimeYI = (date, time, tz) =>
  Intl.DateTimeFormat("yi", configOptions(tz)).format(fromZonedTime(`${date} ${time}`, tz));

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
    : locale === "zh"
    ? formatDateTimeZH(date, time, timeZone)
    : locale === "zh-hans" || locale === "zh-Hans"
    ? formatDateTimeZHS(date, time, timeZone)
    : locale === "zh-hant" || locale === "zh-Hant"
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
    : locale === "sd"
    ? formatDateTimeSD(date, time, timeZone)
    : locale === "ps"
    ? formatDateTimePS(date, time, timeZone)
    : locale === "ug"
    ? formatDateTimeUG(date, time, timeZone)
    : locale === "ckb"
    ? formatDateTimeCKB(date, time, timeZone)
    : locale === "he"
    ? formatDateTimeHE(date, time, timeZone)
    : locale === "yi"
    ? formatDateTimeYI(date, time, timeZone)
    : locale === "en" && formatDateTimeEN(date, time, timeZone);

export const nonIANATimeZone = (locale, date, time, timeZone, timeStyleIsFull) =>
  Intl.DateTimeFormat(locale, { timeStyle: timeStyleIsFull ? "full" : "long", timeZone })
    .formatToParts(fromZonedTime(`${date} ${time}`, timeZone))
    .find(({ type }) => type === "timeZoneName")?.value;
