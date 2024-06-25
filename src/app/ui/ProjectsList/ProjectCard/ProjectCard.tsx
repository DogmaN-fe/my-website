import { ReactElement } from "react";
import styles from "./ProjectCard.module.sass";

import CardPhoto from "./CardPhoto/CardPhoto";
import CardUrls from "./CardUrls/CardUrls";
import CardStack from "./CardStack/CardStack";

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
}): ReactElement => {
  return (
    <article className={styles.card}>
      <CardPhoto image={image} alt={`Проект ${title}`} />
      <div className={styles.card__info}>
        <h3 className={styles.card__info_title}>{title}</h3>
        <p className={styles.card__info_description}>{description}</p>
        <CardStack stack={stack} />
        <CardUrls githubUrl={githubUrl} webSiteUrl={webSiteUrl} />
      </div>
    </article>
  );
};

export default ProjectCard;
