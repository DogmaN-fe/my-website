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
            <Link href={"#main"}>Главная</Link>
          </li>
          <li className={styles.nav__navigation_links__link}>
            <Link href={"#About"}>Обо мне</Link>
          </li>
          <li className={styles.nav__navigation_links__link}>
            <Link href={"#Projects"}>Проекты</Link>
          </li>
        </ul>
        <Button text={"Связаться"} href={"#Contact"} />
      </span>

      <span className={styles.nav__menu}>
        <Image
          src={menuClose.src}
          alt={"menu"}
          fill
          onClick={toggleMenu}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isOpen && <MobileMenu onClick={toggleMenu} />}
      </span>
    </nav>
  );
};

export default Navigation;
