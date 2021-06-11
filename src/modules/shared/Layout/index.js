import React from "react";
import Footer from "../Footer";
import styles from "./index.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
