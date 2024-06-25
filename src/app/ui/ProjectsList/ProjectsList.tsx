"use client";

import { ReactElement, useMemo } from "react";
import { useAppSelector } from "@/app/lib/redux-toolkit/store";
import ProjectCard from "./ProjectCard/ProjectCard";

/**
 * Помогает загрузить карточки на сайт
 */
const ProjectList = (): ReactElement => {
  const projects = useAppSelector((state) => state.projectsSlice.webSite);

  const memoizedProjectCards = useMemo(
    () =>
      projects.map((el, index) => (
        <ProjectCard
          key={index} // Предполагается, что у каждого проекта есть уникальный id
          image={el.imageSrc}
          title={el.title}
          description={el.description}
          stack={el.stack}
          githubUrl={el.githubUrl}
          webSiteUrl={el.webSiteUrl}
        />
      )),
    [projects]
  );

  if (projects.length === 0) {
    return <p>Проекты не найдены.</p>;
  }

  return <>{memoizedProjectCards}</>;
};

export default ProjectList;
