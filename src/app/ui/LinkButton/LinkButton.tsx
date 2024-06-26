import Link from "next/link";
import styles from "./LinkButton.module.sass";

/**
 * Кастомная кнопка для перехода к нужной секции блока (Внимание: Это костамизированый тэг Link, имметирующий кнопку)
 */
const LinkButton = ({
  text,
  className = "",
  href = "#",
}: {
  text: string;
  className?: string;
  href?: string;
}) => {
  return (
    <Link href={href}>
      <button className={`${styles.button} ${className}`}>{text}</button>
    </Link>
  );
};

export default LinkButton;
