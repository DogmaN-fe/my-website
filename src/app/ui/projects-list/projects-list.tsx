"use client";

import { ReactElement } from "react";
import { useAppSelector } from "@/app/lib/redux-toolkit/store";
import ProjectCard from "../project-card/project-card";

/**
 * Помогает загрузить карточки на сайт
 */
const ProjectList = () => {
  const projects = useAppSelector((state) => state.projectsSlice.webSite);

  return (
    <>
      {projects.map((el, index) => (
        <ProjectCard
          key={`project-${index}`}
          image={el.imageSrc}
          title={el.title}
          description={el.description}
          stack={el.stack}
          githubUrl={el.githubUrl}
          webSiteUrl={el.webSiteUrl}
        />
      ))}
    </>
  );
};

export default ProjectList;
