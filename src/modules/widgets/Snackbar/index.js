import classNames from "classnames";
import React from "react";
import Typography from "../Typography";
import styles from "./index.module.scss";

const Snackbar = ({ message, className, action }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Typography>{message}</Typography>
      {action}
    </div>
  );
};

export default Snackbar;
