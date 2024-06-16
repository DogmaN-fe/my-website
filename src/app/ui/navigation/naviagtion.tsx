"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactElement, useState } from "react";
import styles from "./naviagtion.module.sass";

import Button from "../button/button";
import menuClose from "/public/Mobile Menu Toggle.svg";
import MobileMenu from "../mobile-menu/mobile-menu";

export default function Navigation(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

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
        <Image
          src={menuClose.src}
          alt={"menu"}
          fill
          onClick={toggleMenu}
        />
        {isOpen && (
          <MobileMenu toggleMenu={toggleMenu} />
        )}
      </span>
    </nav>
  );
}
