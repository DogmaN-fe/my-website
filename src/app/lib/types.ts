/**
 * Интерфейс для проекта
 */
export interface IProject {
  imageSrc: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  webSiteUrl: string;
}

/**
 * Интерфейс для технологии
 */
export interface ITechImg {
  src: string;
  alt: string;
}
