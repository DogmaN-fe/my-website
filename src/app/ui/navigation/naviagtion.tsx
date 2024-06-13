import Link from "next/link";
import { ReactElement } from "react";
import styles from './naviagtion.module.sass'

import Button from "../button/button";

export default function Navigation(): ReactElement {
  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={styles.nav__logo}>My.Site</Link>
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
        <Button text={"Связаться"} href={"#Projects"} />
      </span>
    </nav>
  );
}
