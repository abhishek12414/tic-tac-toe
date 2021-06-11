import classNames from "classnames";
import React from "react";
import styles from "./index.module.scss";

const Button = ({ className, label, ...props }) => {
  return (
    <button className={classNames(styles.root, className)} {...props}>
      {label}
    </button>
  );
};

export default Button;
