import { getTranslations } from "next-intl/server";
import { direction } from "@/util/text-direction-setter";
import * as formatter from "@/util/datetime-formatter";
import ExternalLinkIcon from "@/icons/external-link-icon";
import ClockIcon from "@/icons/clock-icon";
import styles from "./portfolio.module.css";

export default async function Portfolio({
  link,
  sourceCode,
  tags,
  date,
  time,
  timeZone,
  locale,
  title,
  description,
}) {
  const s = await getTranslations("sourceCode");
  const formatDateTime = (date, time, timeZone) =>
    locale === "id"
      ? formatter.formatDateTimeID(date, time, timeZone)
      : locale === "ms"
      ? formatter.formatDateTimeMS(date, time, timeZone)
      : locale === "es"
      ? formatter.formatDateTimeES(date, time, timeZone)
      : locale === "fr"
      ? formatter.formatDateTimeFR(date, time, timeZone)
      : locale === "fr-CA"
      ? formatter.formatDateTimeFRCA(date, time, timeZone)
      : locale === "de"
      ? formatter.formatDateTimeDE(date, time, timeZone)
      : locale === "no"
      ? formatter.formatDateTimeNO(date, time, timeZone)
      : locale === "nb"
      ? formatter.formatDateTimeNB(date, time, timeZone)
      : locale === "nn"
      ? formatter.formatDateTimeNN(date, time, timeZone)
      : locale === "nl"
      ? formatter.formatDateTimeNL(date, time, timeZone)
      : locale === "eo"
      ? formatter.formatDateTimeEO(date, time, timeZone)
      : locale === "ja"
      ? formatter.formatDateTimeJA(date, time, timeZone)
      : locale === "ko"
      ? formatter.formatDateTimeKO(date, time, timeZone)
      : locale === "zh-hans"
      ? formatter.formatDateTimeZHS(date, time, timeZone)
      : locale === "zh-hant"
      ? formatter.formatDateTimeZHT(date, time, timeZone)
      : locale === "yue"
      ? formatter.formatDateTimeYUE(date, time, timeZone)
      : locale === "th"
      ? formatter.formatDateTimeTH(date, time, timeZone)
      : locale === "vi"
      ? formatter.formatDateTimeVI(date, time, timeZone)
      : locale === "hi"
      ? formatter.formatDateTimeHI(date, time, timeZone)
      : locale === "mr"
      ? formatter.formatDateTimeMR(date, time, timeZone)
      : locale === "ne"
      ? formatter.formatDateTimeNE(date, time, timeZone)
      : locale === "sa"
      ? formatter.formatDateTimeSA(date, time, timeZone)
      : locale === "ta"
      ? formatter.formatDateTimeTA(date, time, timeZone)
      : locale === "ml"
      ? formatter.formatDateTimeML(date, time, timeZone)
      : locale === "ar"
      ? formatter.formatDateTimeAR(date, time, timeZone)
      : locale === "fa"
      ? formatter.formatDateTimeFA(date, time, timeZone)
      : locale === "ur"
      ? formatter.formatDateTimeUR(date, time, timeZone)
      : locale === "ug"
      ? formatter.formatDateTimeUG(date, time, timeZone)
      : locale === "he"
      ? formatter.formatDateTimeHE(date, time, timeZone)
      : locale === "yi"
      ? formatter.formatDateTimeYI(date, time, timeZone)
      : locale === "en" && formatter.formatDateTimeEN(date, time, timeZone);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <a href={link} target="_blank">
          <span dangerouslySetInnerHTML={{ __html: title }} />{" "}
          <ExternalLinkIcon dir={direction(locale)} />
        </a>
      </h3>
      <p className={styles.datetime}>
        <time dateTime={formatDateTime(date, time, timeZone)}>
          {formatDateTime(date, time, timeZone)}
        </time>{" "}
        <ClockIcon /> {timeZone}
      </p>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      <p className={styles.tools}>
        {tags.map(tag => (
          <span key={tag} className={styles.tool}>
            {tag}
          </span>
        ))}
      </p>
      {sourceCode && sourceCode !== "" && (
        <p className={styles["source-code"]}>
          <a href={sourceCode} target="_blank">
            {s("link")} <ExternalLinkIcon dir={direction(locale)} />
          </a>
        </p>
      )}
    </div>
  );
}
