import { ReactElement } from "react";
import styles from "./CustomInput.module.sass";
import { ICustomInputProps } from "@/app/lib/types";

const CustomInput = ({
  text,
  type,
  id,
  placeholder,
  value,
  onChange,
}: ICustomInputProps): ReactElement => {
  return (
    <label htmlFor={id} className={styles.label}>
      <p className={styles.label__text}>{text}</p>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.label__input}
      />
    </label>
  );
};

export default CustomInput;
