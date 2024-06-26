import { MouseEventHandler } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileMenu.module.sass";

import Button from "../../../LinkButton/LinkButton";
import menuOpen from "/public/Mobile Menu Toggle Open.svg";

/**
 * Меню для телефонов и планшетов
 */
const MobileMenu = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLElement>;
}) => {
  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target instanceof HTMLAnchorElement) {
      onClick(e);
    }
  };

  return (
    <div className={styles.menu}>
      <span className={styles.menu__btn_close}>
        <Image src={menuOpen} alt={"menu"} onClick={onClick} layout="fill" />
      </span>
      <ul className={styles.menu__links} onClick={handleMenuClick}>
        <li className={styles.menu__links_link}>
          <Link href={"#main"}>Главная</Link>
        </li>
        <li className={styles.menu__links_link}>
          <Link href={"#About"}>Обо мне</Link>
        </li>
        <li className={styles.menu__links_link}>
          <Link href={"#Projects"}>Проекты</Link>
        </li>
        <li className={styles.menu__links_link} onClick={onClick}>
          <Button text={"Связаться"} href={"#Contact"} />
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
