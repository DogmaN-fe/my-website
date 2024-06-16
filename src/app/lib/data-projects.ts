import { IProject } from "./types";

import todo from "/public/todo.png";
import landing from "/public/landing.jpg";
import testForm from "/public/test-from.png";
import nextjs from "/public/nextjs-original.svg";

export const todoListObj: IProject = {
  imageSrc: todo.src,
  title: "ToDo list",
  description:
    "Список дел, в котором есть три секции: Todo, working и done. ",
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
  description: "Лендинга отеля.",
  stack: [
    "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
    "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
    nextjs.src,
  ],
  githubUrl: "https://github.com/DogmaN-fe/Ovinograd-",
  webSiteUrl: "https://ovinograd.vercel.app",
};

export const TestFormObj: IProject = {
  imageSrc: testForm.src,
  title: "Форма теста",
  description: "Форма для решения теста, с возможностью добавления новых вопросов",
  stack: [
    "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
    "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
    "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg",
  ],
  githubUrl: "https://github.com/DogmaN-fe/test-form",
  webSiteUrl: "https://dogman-fe.github.io/test-form/",
};
