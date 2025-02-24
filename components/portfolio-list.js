import { fromZonedTime } from "date-fns-tz";
import { PORTFOLIOS } from "@/data";
import Portfolio from "./portfolio";

export default function PortfolioList({ locale, number }) {
  const dateInMilliseconds = (date, time, timeZone) =>
    fromZonedTime(`${date} ${time}`, timeZone).getTime();

  return PORTFOLIOS.map(portfolio => (
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
        {
          props: {
            establishedDate: olderDate,
            establishedTime: olderTime,
            establishedTimeZone: olderTimeZone,
          },
        },
        {
          props: {
            establishedDate: newerDate,
            establishedTime: newerTime,
            establishedTimeZone: newerTimeZone,
          },
        }
      ) =>
        dateInMilliseconds(newerDate, newerTime, newerTimeZone) -
        dateInMilliseconds(olderDate, olderTime, olderTimeZone)
    )
    .slice(0, number);
}
