import { getLocale, getTranslations } from "next-intl/server";
import { direction } from "@/util/text-direction-setter";
import { PORTFOLIOS } from "@/data";
import NavigationBar from "@/components/navigation-bar";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import styles from "./page.module.css";

export async function generateMetadata() {
  const m = await getTranslations("metadata");
  return {
    title: m("title"),
    description: m("description"),
    authors: [
      { name: "Ahmad Fauzan Bagaskoro" },
      { name: "Ahmad Fauzan Bagaskoro", url: "https://github.com/ahmadfauzan96" },
    ],
  };
}

export default async function PortfolioPage() {
  const p = await getTranslations("portfolio");
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

  return (
    <div>
      <NavigationBar />
      <header className={styles.header + (cssClass ? " " + cssClass : "")}>
        <h1>{p("title")}</h1>
        {Object.keys(p.raw("explanations")).map(key => (
          <p key={key} dangerouslySetInnerHTML={{ __html: p.raw("explanations." + key) }} />
        ))}
      </header>
      <main className={styles.main}>
        <section className={styles.content}>
          {PORTFOLIOS.map(portfolio => (
            <Portfolio
              key={portfolio.id}
              date={portfolio.establishedDate}
              time={portfolio.establishedTime}
              timeZone={portfolio.establishedTimeZone}
              locale={locale}
              title={
                locale === "id"
                  ? portfolio.titleID
                  : locale === "eo"
                  ? portfolio.titleEO
                  : locale === "ja"
                  ? portfolio.titleJA
                  : portfolio.titleEN
              }
              description={
                locale === "id"
                  ? portfolio.descriptionID
                  : locale === "eo"
                  ? portfolio.descriptionEO
                  : locale === "ja"
                  ? portfolio.descriptionJA
                  : portfolio.descriptionEN
              }
              {...portfolio}
            />
          )).sort(
            (
              { props: { establishedDate: olderDate, establishedTime: olderTime } },
              { props: { establishedDate: newerDate, establishedTime: newerTime } }
            ) =>
              +Date.parse(`${newerDate}, ${newerTime}`) - +Date.parse(`${olderDate}, ${olderTime}`)
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
