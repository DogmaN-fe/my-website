import Image from "next/image";
import styles from "./page.module.sass";
import Button from "./ui/button/button";
import ProjectList from "./ui/projects-list/projects-list";

import nextjs from "../../public/nextjs-original.svg";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (
    <StoreProvider>
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
            <div className={styles.main__about_block__tech}>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-original.svg"
                  }
                  alt={"typescript"}
                  loading="lazy"
                  fill
                />
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg"
                  }
                  alt={"react"}
                  loading="lazy"
                  fill
                />
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
                />
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg"
                  }
                  alt={"javascript"}
                  loading="lazy"
                  fill
                />
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://camo.githubusercontent.com/538f8dbadc315be042cdba792cf1ba52577781d45b5b284a5d4b149eb8bddc07/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f332f33382f48544d4c355f42616467652e7376672f3230343870782d48544d4c355f42616467652e7376672e706e67"
                  }
                  alt={"html"}
                  loading="lazy"
                  fill
                />
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://camo.githubusercontent.com/93a31275130ed91543667414893e58d3b698390c768b49a8b5548ae6247a59d5/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f362f36322f435353335f6c6f676f2e7376672f38303070782d435353335f6c6f676f2e7376672e706e67"
                  }
                  alt={"css"}
                  loading="lazy"
                  fill
                />
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://camo.githubusercontent.com/e5ccb60374ca5294c2498a46aad044490c18313004ae1495f794f82565a7c1f2/68747470733a2f2f736173732d736373732e72752f6173736574732f696d672f7374796c6567756964652f7365616c2d636f6c6f722d61656630333534632e706e67"
                  }
                  alt={"sass"}
                  loading="lazy"
                  fill
                />
              </div>
              <div className={styles.main__about_block__tech_item}>
                <Image
                  src={
                    "https://camo.githubusercontent.com/1f5c5d15135ea1e23dea65371956c24c30295b59297513287e6d68c11b2cbbc4/68747470733a2f2f63646e2e636f7572736568756e7465722e6e65742f63617465676f72792f6769742e706e67"
                  }
                  alt={"git"}
                  loading="lazy"
                  fill
                />
              </div>
            </div>
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
    </StoreProvider>
  );
}
