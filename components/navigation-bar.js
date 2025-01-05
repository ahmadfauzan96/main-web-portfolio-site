"use client";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "./theme-switcher";
import LocaleSwitcher from "./locale-switcher";
import styles from "./navigation-bar.module.css";

export default function NavigationBar() {
  const pathname = usePathname();
  const n = useTranslations("navbar");

  return (
    <nav className={styles.nav}>
      <ThemeSwitcher />
      <ul>
        <li className={styles.link + (pathname === "/" ? " " + styles.active : "")}>
          <Link href="/">
            <p>{n("home")}</p>
          </Link>
        </li>
        <li className={styles.link + (pathname === "/portfolio" ? " " + styles.active : "")}>
          <Link href="/portfolio">
            <p>{n("portfolio")}</p>
          </Link>
        </li>
      </ul>
      <LocaleSwitcher />
    </nav>
  );
}
