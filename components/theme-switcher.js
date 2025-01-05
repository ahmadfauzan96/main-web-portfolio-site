"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkThemeIcon from "@/icons/dark-theme-icon";
import LightThemeIcon from "@/icons/light-theme-icon";
import styles from "./theme-switcher.module.css";

export default function ThemeSwitcher() {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMount(true), []);

  return (
    mount && (
      <div className={styles.switcher} suppressHydrationWarning={true}>
        <button
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          type="button"
          className={styles.button}
        >
          {currentTheme === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
        </button>
      </div>
    )
  );
}
