"use client";

import React, { ChangeEvent, ReactElement, useCallback, useState } from "react";

import styles from "./ContactForm.module.sass";
import CustomInput from "./CustomInput/CustomInput";
import { IFormData } from "@/app/lib/types";

const ContactForm = (): ReactElement => {
  // Переменная для хранения данных из формы
  const [formData, setFormData] = useState<IFormData | null>(null);

  /**
   * Функция, сохраняет данные из формы
   */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      e.persist();

      const { id, value } = e.target;

      setFormData({ ...formData!, [id]: value });
    },
    []
  );

  /**
   * Обработчик отправки формы (Пока не рабочий)
   */
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();

      alert("Упс... Что-то не так");
      console.log({ formData });
      setFormData(null);
    },
    [formData]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__block}>
        <div className={styles.form__block_section}>
          <CustomInput
            text="Имя"
            type="text"
            id="name"
            placeholder="Иван Иванович"
            value={formData?.name || ""}
            onChange={handleChange}
          />
          <CustomInput
            text="Почта"
            type="email"
            id="email"
            placeholder="example@email.com"
            value={formData?.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={styles.form__block_section}>
          <label htmlFor="message" className={styles.label}>
            <p className={styles.label__text}>Сообщение</p>
            <textarea
              id="message"
              className={styles.label__textarea}
              value={formData?.message || ""}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <input className={styles.form__button} type="submit" value="Отправить" />
    </form>
  );
};

export default ContactForm;
