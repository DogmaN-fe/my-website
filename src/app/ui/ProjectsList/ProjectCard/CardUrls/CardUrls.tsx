import Link from "next/link";
import Image from "next/image";
import { ReactElement } from "react";

import github from "../../../../../../public/github.svg";
import website from "../../../../../../public/website.svg";

import styles from "./CardUrls.module.sass";

const CardUrls = ({
  githubUrl,
  webSiteUrl,
}: {
  githubUrl: string;
  webSiteUrl: string;
}): ReactElement => {
  return (
    <div className={styles.urls}>
      <Link href={githubUrl} target="_blank" className={styles.urls__url}>
        <Image src={github.src} alt={"github"} loading="lazy" fill />
      </Link>
      <Link href={webSiteUrl} target="_blank" className={styles.urls__url}>
        <Image src={website.src} alt={"website"} loading="lazy" fill />
      </Link>
    </div>
  );
};

export default CardUrls;
