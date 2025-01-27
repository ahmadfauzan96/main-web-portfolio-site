import { getTranslations } from "next-intl/server";
import { formatDateTime, nonIANATimeZone } from "@/util/datetime-formatter";
import { direction } from "@/util/text-direction-setter";
import ExternalLinkIcon from "@/icons/external-link-icon";
import ClockIcon from "@/icons/clock-icon";
import styles from "./portfolio.module.css";

export default async function Portfolio({
  link,
  sourceCode,
  tools,
  date,
  time,
  timeZone,
  locale,
  title,
  description,
}) {
  const s = await getTranslations("sourceCode");
  const dateTime =
    formatDateTime(locale, date, time, timeZone) +
    " " +
    nonIANATimeZone(locale, date, time, timeZone, true);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <a href={link} target="_blank">
          <span dangerouslySetInnerHTML={{ __html: title }} />{" "}
          <ExternalLinkIcon dir={direction(locale)} />
        </a>
      </h3>
      <p className={styles.datetime} dir={direction(locale)}>
        <time dateTime={dateTime}>{dateTime}</time> <ClockIcon /> {timeZone} (
        {nonIANATimeZone(locale, date, time, timeZone, false)})
      </p>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      <p className={styles.tools}>
        {tools.map(tool => (
          <span key={tool} className={styles.tool}>
            {tool}
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
