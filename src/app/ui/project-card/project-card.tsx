import Image from "next/image";
import styles from "./project-card.module.sass";
import { ReactElement } from "react";
import Link from "next/link";

import github from "../../../../public/Vector.svg";
import website from "../../../../public/Vector (1).svg";

/**
 * Карточка проекта
 */
const ProjectCard = ({
  image,
  title,
  description,
  stack,
  githubUrl,
  webSiteUrl,
}: {
  image: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  webSiteUrl: string;
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__photo}>
        <Image src={image} alt={"фото проекта"} loading="lazy" fill></Image>
      </div>
      <div className={styles.card__info}>
        <h2 className={styles.card__info_title}>{title}</h2>
        <p className={styles.card__info_description}>{description}</p>
        <div className={styles.card__info_stack}>
          {stack.map((item, index) => {
            return (
              <div
                key={`e6ve5e5e-${index}`}
                className={styles.card__info_stack__item}
              >
                <Image
                  src={item}
                  alt={"typescript"}
                  loading="lazy"
                  fill
                ></Image>
              </div>
            );
          })}
        </div>
        <div className={styles.card__info_urls}>
          <Link
            href={githubUrl}
            target="_blank"
            className={styles.card__info_urls__url}
          >
            <Image src={github.src} alt={"github"} loading="lazy" fill />
          </Link>
          <Link
            href={webSiteUrl}
            target="_blank"
            className={styles.card__info_urls__url}
          >
            <Image src={website.src} alt={"website"} loading="lazy" fill />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
