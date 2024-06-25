import { ReactElement } from "react";

import styles from "./CustomInput.module.sass";

const CustomInput = ({
  text,
  type,
  id,
}: {
  text: string;
  type: string;
  id: string;
}): ReactElement => {
  return (
    <label htmlFor={id} className={styles.label}>
      <p className={styles.label__text}>{text}</p>
      <input id={id} type={type} className={styles.label__input} />
    </label>
  );
};

export default CustomInput;
