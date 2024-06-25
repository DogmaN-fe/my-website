import { ReactElement } from "react";
import Image from "next/image";

import styles from "./CardStack.module.sass";

const CardStack = ({ stack }: { stack: string[] }): ReactElement => {
  return (
    <div className={styles.stack}>
      {stack.map((item, index) => {
        return (
          <div key={`e6ve5e5e-${index}`} className={styles.stack__item}>
            <Image src={item} alt={`${index}`} loading="lazy" fill></Image>
          </div>
        );
      })}
    </div>
  );
};

export default CardStack;
