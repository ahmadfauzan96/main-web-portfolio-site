"use client";
import { useLocale, useTranslations } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";
import { direction } from "@/util/text-direction-setter";
import { LANGUAGES } from "@/data";
import styles from "./locale-switcher.module.css";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const { push } = useRouter();
  const n = useTranslations("navbar");

  const label =
    locale === "ms"
      ? "Bahasa Tapak"
      : locale === "nl"
      ? "Sitetaal"
      : locale === "no" || locale === "nb" || locale === "nn"
      ? "Språk på nettstedet"
      : locale === "vi"
      ? "Ngôn ngữ trang web"
      : locale === "ko"
      ? "사이트 언어"
      : locale === "zh-hans" || locale === "zh-Hans"
      ? "网站语言"
      : locale === "zh-hant" || locale === "zh-Hant" || locale === "yue"
      ? "網站語言"
      : locale === "th"
      ? "ภาษาของไซต์"
      : locale === "hi" || locale === "mr" || locale === "ne" || locale === "sa"
      ? "साइट भाषा"
      : locale === "ta"
      ? "தள மொழி"
      : locale === "ar"
      ? "لغة الموقع"
      : locale === "fa"
      ? "زبان سایت"
      : locale === "ur"
      ? "سائٹ کی زبان"
      : locale === "ug"
      ? "بېكەت تىلى"
      : locale === "he"
      ? "שפת האתר"
      : locale === "yi"
      ? "פּלאַץ שפּראַך"
      : n("localeSelector");

  const nonLGCFont = lang =>
    lang === "ja"
      ? "Noto Sans JP"
      : lang === "ko"
      ? "Noto Sans KR"
      : lang === "zh-hans" || lang === "zh-Hans"
      ? "Noto Sans SC"
      : lang === "zh-hant" || lang === "zh-Hant"
      ? "Noto Sans TC"
      : lang === "yue"
      ? "Noto Sans HK"
      : lang === "ar" || lang === "fa" || lang === "ur" || lang === "ug" || lang === "ms-arab"
      ? "Noto Sans Arabic"
      : lang === "he" || lang === "yi"
      ? "Noto Sans Hebrew"
      : lang === "th"
      ? "Noto Sans Thai"
      : lang === "ta" && "Noto Sans Tamil";
  const languageFont = lang => (nonLGCFont(lang) ? ["Noto Sans", nonLGCFont(lang)] : ["Noto Sans"]);

  function changeLocale(locale) {
    // * the useRouter() hook from "@/i18n/routing"
    push(pathname, { locale });
    // * the useRouter() hook from from "next/navigation"
    // const pathnameArray = pathname.split("/");
    // const pathnameArrayWithoutLocale = pathnameArray.slice(2, pathnameArray.length);
    // const pathnameWithoutLocale = pathnameArrayWithoutLocale.join("/");
    // push("/" + locale + "/" + pathnameWithoutLocale);
  }

  return (
    <div className={styles.switcher}>
      <label htmlFor="sitelang">{label}</label>
      <select
        name="sitelang"
        id="sitelang"
        defaultValue={locale}
        onChange={e => changeLocale(e.target.value)}
        lang={locale}
        dir={direction(locale)}
        style={{ fontFamily: languageFont(locale) }}
      >
        {LANGUAGES.map(({ title, value }) => (
          <option
            key={value}
            value={value}
            lang={value}
            dir={direction(value)}
            style={{ fontFamily: languageFont(value) }}
          >
            {title}
          </option>
        ))}
      </select>
    </div>
  );
}
