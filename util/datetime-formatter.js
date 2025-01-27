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
// * format time: hh:mm || hh:m || h:mm || h:m
export const formatDateTimeID = (date, time, timeZone) =>
  Intl.DateTimeFormat("id-ID", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeMS = (date, time, timeZone) =>
  Intl.DateTimeFormat("ms-SG", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeEN = (date, time, timeZone) =>
  Intl.DateTimeFormat("en-SG", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeES = (date, time, timeZone) =>
  Intl.DateTimeFormat("es-MX", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeFR = (date, time, timeZone) =>
  Intl.DateTimeFormat("fr-FR", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeFRCA = (date, time, timeZone) =>
  Intl.DateTimeFormat("fr-CA", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeDE = (date, time, timeZone) =>
  Intl.DateTimeFormat("de-DE", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeNO = (date, time, timeZone) =>
  Intl.DateTimeFormat("no-NO", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeNB = (date, time, timeZone) =>
  Intl.DateTimeFormat("nb-NO", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeNN = (date, time, timeZone) =>
  Intl.DateTimeFormat("nn-NO", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeNL = (date, time, timeZone) =>
  Intl.DateTimeFormat("nl-NL", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeEO = (date, time, timeZone) =>
  Intl.DateTimeFormat("eo-ID", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeJA = (date, time, timeZone) =>
  Intl.DateTimeFormat("ja-JP-u-ca-japanese", configOptions(timeZone, true)).format(
    new Date(`${date} ${time}`)
  );
export const formatDateTimeKO = (date, time, timeZone) =>
  Intl.DateTimeFormat("ko-KR", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeZHS = (date, time, timeZone) =>
  Intl.DateTimeFormat("zh-hans-SG", configOptions(timeZone, true)).format(
    new Date(`${date} ${time}`)
  );
export const formatDateTimeZHT = (date, time, timeZone) =>
  Intl.DateTimeFormat("zh-hant-TW", configOptions(timeZone, true)).format(
    new Date(`${date} ${time}`)
  );
export const formatDateTimeYUE = (date, time, timeZone) =>
  Intl.DateTimeFormat("yue-HK", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeTH = (date, time, timeZone) =>
  Intl.DateTimeFormat("th-TH", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeVI = (date, time, timeZone) =>
  Intl.DateTimeFormat("vi-VN", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeHI = (date, time, timeZone) =>
  Intl.DateTimeFormat("hi-IN", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeMR = (date, time, timeZone) =>
  Intl.DateTimeFormat("mr-IN", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeNE = (date, time, timeZone) =>
  Intl.DateTimeFormat("ne-NP", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeSA = (date, time, timeZone) =>
  Intl.DateTimeFormat("sa-IN", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeTA = (date, time, timeZone) =>
  Intl.DateTimeFormat("ta-SG", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeML = (date, time, timeZone) =>
  Intl.DateTimeFormat("ml-IN", configOptions(timeZone, false)).format(new Date(`${date} ${time}`));
export const formatDateTimeAR = (date, time, timeZone) =>
  Intl.DateTimeFormat("ar-SA", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeFA = (date, time, timeZone) =>
  Intl.DateTimeFormat("fa-IR", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeUR = (date, time, timeZone) =>
  Intl.DateTimeFormat("ur-PK-u-nu-arabext", configOptions(timeZone, false)).format(
    new Date(`${date} ${time}`)
  );
export const formatDateTimePS = (date, time, timeZone) =>
  Intl.DateTimeFormat("ps-AF", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeUG = (date, time, timeZone) =>
  Intl.DateTimeFormat("ug-CN", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeHE = (date, time, timeZone) =>
  Intl.DateTimeFormat("he-PS", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));
export const formatDateTimeYI = (date, time, timeZone) =>
  Intl.DateTimeFormat("yi-DE", configOptions(timeZone, true)).format(new Date(`${date} ${time}`));

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

export const nonIANATimeZone = (locale, date, time, timeZone, timeStyleIsFull) =>
  Intl.DateTimeFormat(locale, {
    dateStyle: "full",
    timeStyle: timeStyleIsFull ? "full" : "long",
    timeZone,
  })
    .formatToParts(new Date(date + " " + time))
    .find(({ type }) => type === "timeZoneName")?.value;
