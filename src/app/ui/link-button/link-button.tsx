import Link from "next/link";
import styles from "./link-button.module.sass";

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
    <Link href={href} className={`${styles.button} ${className}`}>
      {text}
    </Link>
  );
};

export default LinkButton;
