import { getTranslations } from "next-intl/server";
import { direction } from "@/util/text-direction-setter";
import { formatDateTime } from "@/util/datetime-formatter";
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

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <a href={link} target="_blank">
          <span dangerouslySetInnerHTML={{ __html: title }} />{" "}
          <ExternalLinkIcon dir={direction(locale)} />
        </a>
      </h3>
      <p className={styles.datetime} dir={direction(locale)}>
        <time dateTime={formatDateTime(locale, date, time, timeZone)}>
          {formatDateTime(locale, date, time, timeZone)}
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
