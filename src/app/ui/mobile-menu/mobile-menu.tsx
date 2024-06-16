"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./mobile-menu.module.sass";

import Button from "../button/button";
import menuOpen from "/public/Mobile Menu Toggle Open.svg";
import { MouseEventHandler } from "react";

const MobileMenu = ({
  toggleMenu,
}: {
  toggleMenu: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <div className={styles.menu}>
      <span className={styles.menu__btn_close}>
        <Image src={menuOpen} alt={"menu"} onClick={toggleMenu} fill />
      </span>
      <ul className={styles.menu__inks}>
        <li className={styles.menu__links_link}>
          <Link href={"#main"} onClick={toggleMenu}>
            Главная
          </Link>
        </li>
        <li className={styles.menu__links_link}>
          <Link href={"#About"} onClick={toggleMenu}>
            Обо мне
          </Link>
        </li>
        <li className={styles.menu__links_link}>
          <Link href={"#Projects"} onClick={toggleMenu}>
            Проекты
          </Link>
        </li>
        <li className={styles.menu__links_link} onClick={toggleMenu}>
          <Button text={"Связаться"} href={"#Projects"} />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
