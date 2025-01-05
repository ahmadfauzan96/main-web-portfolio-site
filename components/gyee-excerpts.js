import { getTranslations } from "next-intl/server";
import { direction } from "@/util/text-direction-setter";
import { GYEE_EXCERPTS } from "@/data";
import styles from "./gyee-excerpts.module.css";

export default async function GyeeExcerpts() {
  const e = await getTranslations("gyeeExcerpts");
  return (
    <div className={styles.container}>
      <p className={styles.title} dangerouslySetInnerHTML={{ __html: e.raw("introductory") }} />
      <ul className={styles.content}>
        {GYEE_EXCERPTS.map(({ lang, fonts, excerpt }) => (
          <li key={lang}>
            <div lang={lang} dir={direction(lang)} style={{ fontFamily: fonts }}>
              {excerpt}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
