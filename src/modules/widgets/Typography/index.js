import classNames from "classnames";
import React from "react";
import styles from "./index.module.scss";

const Typography = ({ children, className }) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};

export default Typography;
