import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { addComma } from "@/util/comma-formatter";
import { PORTFOLIOS, SKILLS } from "@/data";
import NavigationBar from "@/components/navigation-bar";
import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Portfolio from "@/components/portfolio";
import GyeeExcerpts from "@/components/gyee-excerpts";
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

export default async function HomePage({ params }) {
  const { locale } = await params;
  let aboutMeParagraphs = [];
  const a = await getTranslations("aboutMe");
  const s = await getTranslations("skillsAndKnowledge");
  const c = await getTranslations("contactMe");
  const p = await getTranslations("portfolio");

  // ? Multiple ways to dynamically loop aboutMe.content through all the paragraphs
  // * a.raw("content") -> object
  // for (const key in a.raw("content")) {
  //   if (Object.prototype.hasOwnProperty.call(a.raw("content"), key)) {
  //     const paragraph = a.raw("content." + key);
  //     aboutMeParagraphs.push({ key, paragraph });
  //   }
  // }

  // * Object.entries(a.raw("content")) -> array
  for (const [key, paragraph] of Object.entries(a.raw("content"))) {
    aboutMeParagraphs.push({ key, paragraph });
  }

  // Object.entries(a.raw("content")).forEach(([key, paragraph]) =>
  //   aboutMeParagraphs.push({ key, paragraph })
  // );

  // for (let i = 0; i < Object.entries(a.raw("content")).length; i++) {
  //   const [key, paragraph] = Object.entries(a.raw("content"))[i];
  //   aboutMeParagraphs.push({ key, paragraph });
  // }

  // * Object.keys(a.raw("content")) -> array
  // for (const key of Object.keys(a.raw("content"))) {
  //   aboutMeParagraphs.push({ key, paragraph: a.raw("content." + key) });
  // }

  // Object.keys(a.raw("content")).forEach(key =>
  //   aboutMeParagraphs.push({ key, paragraph: a.raw("content." + key) })
  // );

  // for (let key = 0; key < Object.keys(a.raw("content")).length; key++) {
  //   const paragraph = a.raw("content." + key);
  //   aboutMeParagraphs.push({ key, paragraph });
  // }

  // * Object.values(a.raw("content")) -> array
  // for (const paragraph of Object.values(a.raw("content"))) {
  //   aboutMeParagraphs.push({ key: Object.values(a.raw("content")).indexOf(paragraph), paragraph });
  // }

  // Object.values(a.raw("content")).forEach(paragraph =>
  //   aboutMeParagraphs.push({ key: Object.values(a.raw("content")).indexOf(paragraph), paragraph })
  // );

  // for (let key = 0; key < Object.values(a.raw("content")).length; key++) {
  //   const paragraph = a.raw("content." + key);
  //   aboutMeParagraphs.push({ key, paragraph });
  // }

  // * a.raw("content") -> array
  // for (const paragraph of a.raw("content")) {
  //   aboutMeParagraphs.push({ key: a.raw("content").indexOf(paragraph), paragraph });
  // }

  // a.raw("content").forEach(paragraph =>
  //   aboutMeParagraphs.push({ key: a.raw("content").indexOf(paragraph), paragraph })
  // );

  // for (let key = 0; key < a.raw("content").length; key++) {
  //   const paragraph = a.raw("content." + key);
  //   aboutMeParagraphs.push({ key, paragraph });
  // }

  return (
    <div className={styles.page}>
      <NavigationBar />
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.introduction}>
            <h1>{a("title")}</h1>
            {aboutMeParagraphs.map(({ key, paragraph }) => (
              <p key={key} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <h1>{s("title")}</h1>
            <ul>
              {Object.entries(SKILLS).map(([title, skills]) => (
                <li key={title}>
                  {s.rich(title + ".title", {
                    strong: chunks => <strong>{chunks}</strong>,
                    em: chunks => <em>{chunks}</em>,
                  })}
                  {skills.map(skill => (
                    <span key={skill}>{skill + addComma(locale, skills, skill)}</span>
                  ))}
                </li>
              ))}
            </ul>
            <h1>{c("text")}</h1>
            <CallToAction />
          </section>
          <section className={styles.portfolio}>
            <Link href="/portfolio">
              <h1>{p("title")}</h1>
            </Link>
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
            ))
              .sort(
                (
                  { props: { establishedDate: olderDate, establishedTime: olderTime } },
                  { props: { establishedDate: newerDate, establishedTime: newerTime } }
                ) =>
                  new Date(`${newerDate}, ${newerTime}`).getTime() -
                  new Date(`${olderDate}, ${olderTime}`).getTime()
              )
              .slice(0, 2)}
          </section>
        </div>
        <GyeeExcerpts />
      </main>
      <Footer />
    </div>
  );
}
