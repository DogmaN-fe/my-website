"use client";

import Image from "next/image";
import styles from "./Stack.module.sass";
import { useAppSelector } from "@/app/lib/redux-toolkit/store";
import { ITechImg } from "@/app/lib/types";

/*
 * Список технологий
 */
const Stack = () => {
  const technologies: ITechImg[] = useAppSelector(
    (state) => state.technologiesSlice.tech
  );

  
  return (
    <div className={styles.tech}>
      {technologies.map((item) => (
        <div key={item.alt} className={styles.tech_item}>
          <Image src={item.src} alt={item.alt} loading="lazy" fill />
        </div>
      ))}
    </div>
  );
};

export default Stack;
