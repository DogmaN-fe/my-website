"use client";

import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "./lib/redux-toolkit/store";
import styles from "./page.module.sass";
import Button from "./ui/button/button";
import ProjectList from "./ui/projects-list/projects-list";

import nextjs from "../../public/nextjs-original.svg";

export default function Home() {
  return (
    <Provider store={store}>
      <main id="main" className={styles.main}>
        <section className={styles.main__welcome}>
          <div className={styles.main__welcome_block}>
            <h1 className={styles.main__welcome_block__title}>
              Привет, меня зовут Эдуард
            </h1>
            <p className={styles.main__welcome_block__description}>
              Это мой сайт визитка, который поможет показать мои достижения в
              работе и поделиться информацией о моем опыте и навыках. На сайте
              есть информацию обо мне, проектах, контактные данные и ссылки на
              профили в социальных сетях.
            </p>
            <span className={styles.main__welcome_block__buttons}>
              <Button
                text="Проекты"
                href="#Projects"
                className={styles.button_projects}
              />
              <Button text="Связаться" href="#Contatc" />
            </span>
          </div>
        </section>

        <section id="About" className={styles.main__about}>
          <div className={styles.main__about_block}>
            <h2 className={styles.main__about_block__title}>Обо мне</h2>
            <p className={styles.main__about_block__description}>
              Я начинающий веб-разработчик с отличными знаниями HTML, CSS,
              JavaScript и TypeScript. Мой основной фокус - разработка
              современных веб-приложений с использованием фреймворков React и
              NextJS. Я также имею опыт работы с препроцессором SASS и уверенно
              владею Redux Toolkit для управления состоянием приложений. Моя
              цель - создавать эффективные и интуитивно понятные
              пользовательские интерфейсы, а также постоянно совершенствовать
              свои навыки в области веб-разработки.
            </p>
            <span className={styles.main__about_block__tech}>
              {/* ToDo Перенести данные из всех Image в массив объектов  */}
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg"
                  }
                  alt={"typescript"}
                  loading="lazy"
                  fill
                ></Image>
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg"
                  }
                  alt={"react"}
                  loading="lazy"
                  fill
                ></Image>
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image src={nextjs.src} alt={"nextjs"} fill></Image>
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://github.com/devicons/devicon/raw/master/icons/redux/redux-original.svg"
                  }
                  alt={"redux"}
                  loading="lazy"
                  fill
                ></Image>
              </div>
            </span>
          </div>
        </section>

        <section id="Projects" className={styles.main__project}>
          <div className={styles.main__project_info}>
            <h2 className={styles.main__project_info__title}>Проекты</h2>
          </div>
          <div className={styles.main__project_cards}>
            <ProjectList />
          </div>
        </section>

        {/* ToDo Оформить блок коонтакта со мной  */}
      </main>
    </Provider>
  );
}
