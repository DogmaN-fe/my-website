"use client";

import React, { ReactElement, useCallback } from "react";

import styles from "./ContactForm.module.sass";
import CustomInput from "./CustomInput/CustomInput";

const ContactForm = (): ReactElement => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Упс... Что-то не так");
  }, []);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__block}>
        <div className={styles.form__block_section}>
          <CustomInput text="Имя" type="text" id="name" />
          <CustomInput text="Почта" type="email" id="email" />
        </div>
        <div className={styles.form__block_section}>
          <CustomInput text="Сообщение" type="text" id="message" />
        </div>
      </div>
      <input className={styles.form__button} type="submit" value="Отправить" />
    </form>
  );
};

export default ContactForm;
