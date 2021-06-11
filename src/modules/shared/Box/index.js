import cx from "classnames";
import styles from "./index.module.scss";

const Box = ({ children, className, ...props }) => {
  return (
    <div className={cx(styles.box, className)} {...props}>
      {children}
    </div>
  );
};

export default Box;
