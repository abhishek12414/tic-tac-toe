import React from "react";
import Github from "../../../assets/svg/Github";
import LinkedIn from "../../../assets/svg/LinkedIn";
import Typography from "../../widgets/Typography";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Typography>Tic Tac Toe</Typography>
        <Typography className={styles.copyright}>
          &copy; {new Date().getFullYear()} Abhishek Kumar
        </Typography>
      </div>
      <div className={styles.links}>
        <a
          href="https://github.com/abhishek12414"
          target="_blank"
          rel="noreferrer"
        >
          <Github width={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek12414"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
