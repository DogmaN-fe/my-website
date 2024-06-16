"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./naviagtion.module.sass";
import menuClose from "/public/Mobile Menu Toggle.svg";

import Button from "../link-button/link-button";
import MobileMenu from "../mobile-menu/mobile-menu";

/**
 * Навигация в header'е
 */
const Navigation = () => {
  // Переменная для открытия меню на телефонах
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Функция открытия/закрытия меню
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <Button text={"Связаться"} href={"#Contatc"} />
      </span>

      <span className={styles.nav__navigation_menu}>
        <Image src={menuClose.src} alt={"menu"} fill onClick={toggleMenu} />
        {isOpen && <MobileMenu onClick={toggleMenu} />}
      </span>
    </nav>
  );
};

export default Navigation;
