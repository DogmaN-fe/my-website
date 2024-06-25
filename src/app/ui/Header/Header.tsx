import Link from "next/link";
import { ReactElement } from "react";
import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.sass";

/**
 * Шапка сайта
 */
const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Link href={"/"} className={styles.header__logo} passHref>
        My.Site
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
