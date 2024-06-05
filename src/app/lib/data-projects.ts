import { IProject } from "./types";

import todo from "../../../public/Снимок экрана 2024-05-30 202734.png";
import nextjs from "../../../public/nextjs-original.svg";
import landing from "../../../public/Снимок экрана 2024-05-30 202740.png";

export const todoListObj: IProject = {
  imageSrc: todo.src,
  title: "ToDo list",
  description:
    "Простоя реализация списка дел, в котором есть три секции: Todo, working и done.",
  stack: [
    "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
    "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
    nextjs.src,
  ],
  githubUrl: "https://github.com/DogmaN-fe/ToDo-List",
  webSiteUrl: "https://to-do-list-alpha-smoky.vercel.app/",
};

export const landingObj: IProject = {
  imageSrc: landing.src,
  title: "Лэндинг",
  description: "Пример верстки лендинга отеля.",
  stack: [
    "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
    "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
    nextjs.src,
  ],
  githubUrl: "https://github.com/DogmaN-fe/Ovinograd-",
  webSiteUrl: "https://ovinograd.vercel.app",
};