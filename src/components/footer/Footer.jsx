import styles from "./Footer.module.css";
import openWeatherLogo from "../../assets/openweatherImg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.info}>Designed and Coded by :</p>
      <p>
        <sup>&#169; </sup>
        {currentYear} <span className={styles.myName}>Archit Agarwal</span>
      </p>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/archit-agarwal-486ba5256/"
          title="Author LinkedIn account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ArchitAgarwal04"
          title="Author github account"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
