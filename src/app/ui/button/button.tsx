import Link from "next/link";
import { ReactElement } from "react";
import styles from './button.module.sass'

export default function Button({
  text,
  className ='',
  href = "#",
}: {
  text: string;
  className?: string;
  href?: string;
}): ReactElement {
  return (
    <Link href={href} className={`${className} ${styles.button}`}>
      {text}
    </Link>
  );
}
