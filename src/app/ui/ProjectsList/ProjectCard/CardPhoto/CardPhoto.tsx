import { ReactElement } from "react";
import Image from "next/image";

import styles from "./CardPhoto.module.sass";

const CardPhoto = ({
  image,
  alt,
}: {
  image: string;
  alt: string;
}): ReactElement => {
  return (
    <div className={styles.photo}>
      <Image src={image} alt={alt} loading="lazy" fill></Image>
    </div>
  );
};

export default CardPhoto;
