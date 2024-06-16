"use client";

import { MouseEventHandler } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./mobile-menu.module.sass";

import Button from "../link-button/link-button";
import menuOpen from "/public/Mobile Menu Toggle Open.svg";

/**
 * Меню для телефонов и планшетов
 */
const MobileMenu = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <div className={styles.menu}>
      <span className={styles.menu__btn_close}>
        <Image src={menuOpen} alt={"menu"} onClick={onClick} fill />
      </span>
      <ul className={styles.menu__inks}>
        <li className={styles.menu__links_link}>
          <Link href={"#main"} onClick={onClick}>
            Главная
          </Link>
        </li>
        <li className={styles.menu__links_link}>
          <Link href={"#About"} onClick={onClick}>
            Обо мне
          </Link>
        </li>
        <li className={styles.menu__links_link}>
          <Link href={"#Projects"} onClick={onClick}>
            Проекты
          </Link>
        </li>
        <li className={styles.menu__links_link} onClick={onClick}>
          <Button text={"Связаться"} href={"#Projects"} />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
