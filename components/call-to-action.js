"use client";
import LinkedinIcon from "@/icons/linkedin-icon";
import GithubIcon from "@/icons/github-icon";
import EmailIcon from "@/icons/email-icon";
import styles from "./call-to-action.module.css";

export default function CallToAction() {
  function openMailInNewTab(e) {
    e.preventDefault();
    window.open("mailto:92.ahmadfauzanbagaskoro@gmail.com", "mail");
  }

  return (
    <div className={styles.ctas}>
      <a
        href="https://www.linkedin.com/in/ahmad-fauzan-bagaskoro-45739216a/"
        className={styles.icon}
        target="_blank"
      >
        <LinkedinIcon />
      </a>
      <a href="https://github.com/ahmadfauzan96" className={styles.icon} target="_blank">
        <GithubIcon />
      </a>
      <a
        href="mailto:92.ahmadfauzanbagaskoro@gmail.com"
        onClick={e => openMailInNewTab(e)}
        className={styles.icon}
      >
        <EmailIcon />
      </a>
    </div>
  );
}
