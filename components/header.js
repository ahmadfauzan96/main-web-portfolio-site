import { getLocale, getTranslations } from "next-intl/server";
import styles from "./header.module.css";

export default async function Header() {
  const h = await getTranslations("header");
  const locale = await getLocale();

  const cssClass =
    locale === "ja"
      ? styles["header-ja"]
      : locale === "ko"
      ? styles["header-ko"]
      : locale === "zh-hans" || locale === "zh-Hans"
      ? styles["header-zhs"]
      : locale === "zh-hant" || locale === "zh-Hant"
      ? styles["header-zht"]
      : locale === "yue"
      ? styles["header-yue"]
      : locale === "th"
      ? styles["header-th"]
      : locale === "ta"
      ? styles["header-ta"]
      : locale.includes("arab") ||
        locale.includes("Arab") ||
        locale === "ar" ||
        locale === "fa" ||
        locale === "ur" ||
        locale === "ps" ||
        locale === "ug"
      ? styles["header-ar"]
      : locale.includes("hebr") || locale.includes("Hebr") || locale === "he" || locale === "yi"
      ? styles["header-he"]
      : "";
  const headerStyles = styles.header + (cssClass ? " " + cssClass : "");

  switch (locale) {
    case "ko":
      return (
        <header className={headerStyles}>
          <h1>
            안녕하세요! 저는<strong>Ahmad Fauzan Bagaskoro</strong>입니다.
          </h1>
          <h2>저는 웹 개발자입니다.</h2>
        </header>
      );

    case "zh-hans" || "zh-Hans":
      return (
        <header className={headerStyles}>
          <h1>
            你好！我是<strong>Ahmad Fauzan Bagaskoro</strong>。
          </h1>
          <h2>我是网络开发人员。</h2>
        </header>
      );

    case "zh-hant" || "zh-Hant":
      return (
        <header className={headerStyles}>
          <h1>
            你好！我是<strong>Ahmad Fauzan Bagaskoro</strong>。
          </h1>
          <h2>我是網路開發者。</h2>
        </header>
      );

    case "yue":
      return (
        <header className={headerStyles}>
          <h1>
            你好！我是<strong>Ahmad Fauzan Bagaskoro</strong>。
          </h1>
          <h2>我是網路開發者。</h2>
        </header>
      );

    case "th":
      return (
        <header className={headerStyles}>
          <h1>
            สวัสดีครับ! ผมชื่อ<strong>Ahmad Fauzan Bagaskoro</strong>.
          </h1>
          <h2>ผมเป็นนักพัฒนาเว็บ.</h2>
        </header>
      );

    default:
      return (
        <header className={headerStyles}>
          <h1 dangerouslySetInnerHTML={{ __html: h.raw("greetings") }} />
          <h2 dangerouslySetInnerHTML={{ __html: h.raw("whoAmI") }} />
        </header>
      );
  }
}
