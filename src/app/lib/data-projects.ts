import { IProject } from "./types";

import todo from "/public/todo.png";
import landing from "/public/landing.jpg";
import testForm from "/public/test-from.png";
import siteAuth from "/public/site-auth.png";

import nextjs from "/public/nextjs-original.svg";

// Примеры моих работ
const projects: IProject[] = [
  {
    imageSrc: testForm.src,
    title: "Редактируемый тест",
    description: "Задача: закрепить знания React'a и Redux-toolkit",
    stack: [
      "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
      "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
      "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg",
    ],
    githubUrl: "https://github.com/DogmaN-fe/test-form",
    webSiteUrl: "https://dogman-fe.github.io/test-form/",
  },
  {
    imageSrc: todo.src,
    title: "Трекер задач",
    description: "Задача: закрепить базовые знания NextJS и React",
    stack: [
      "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
      "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
      nextjs.src,
    ],
    githubUrl: "https://github.com/DogmaN-fe/ToDo-List",
    webSiteUrl: "https://to-do-list-alpha-smoky.vercel.app/",
  },
  {
    imageSrc: landing.src,
    title: "Сайт отеля",
    description: "Задача: разарботать лэндинга на базе NextJS",
    stack: [
      "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
      "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
      nextjs.src,
    ],
    githubUrl: "https://github.com/DogmaN-fe/Ovinograd-",
    webSiteUrl: "https://ovinograd.vercel.app",
  },
  {
    imageSrc: siteAuth.src,
    title: "Сайт c авторизацией",
    description: "Задача: разработать сайт с авторизацей пользователя",
    stack: [
      "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
      "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg",
      "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg",
    ],
    githubUrl: "https://github.com/DogmaN-fe/site-authorization",
    webSiteUrl: "https://site-authorization.vercel.app/",
  },
];

export default projects;
