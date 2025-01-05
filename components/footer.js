import CallToAction from "./call-to-action";
import styles from "./footer.module.css";

export default function Footer() {
  function copyrightYear(createdYear) {
    const currentYear = new Date().getFullYear();
    return currentYear > createdYear
      ? createdYear + "-" + currentYear
      : currentYear === createdYear
      ? currentYear.toString()
      : "Not created yet.";
  }

  return (
    <footer className={styles.footer}>
      <p>Ahmad Fauzan Bagaskoro © {copyrightYear(2025)}</p>
      <CallToAction />
    </footer>
  );
}
