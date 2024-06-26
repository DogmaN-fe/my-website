"use client";

import { ReactElement, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navigation.module.sass";
import menuClose from "/public/Mobile Menu Toggle.svg";

import Button from "../../LinkButton/LinkButton";
import MobileMenu from "./MobileMenu/MobileMenu";

/**
 * Навигация в header'е
 */
const Navigation = (): ReactElement => {
  // Переменная для открытия меню на телефонах
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Функция открытия/закрытия меню
   */
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <span className={styles.nav__navigation}>
        <ul className={styles.nav__navigation_links}>
          <li className={styles.nav__navigation_links__link}>
            <Link href={"#main"} aria-label="На главную">Главная</Link>
          </li>
          <li className={styles.nav__navigation_links__link}>
            <Link href={"#About"} aria-label="Обо мне">Обо мне</Link>
          </li>
          <li className={styles.nav__navigation_links__link}>
            <Link href={"#Projects"} aria-label="Проекты">Проекты</Link>
          </li>
        </ul>
        <Button text={"Связаться"} href={"#Contact"} aria-label="Связаться"/>
      </span>

      <span className={styles.nav__menu}>
        <Image
          src={menuClose.src}
          alt={"menu"}
          fill
          onClick={toggleMenu}
        />
        {isOpen && <MobileMenu onClick={toggleMenu} />}
      </span>
    </nav>
  );
};

export default Navigation;
