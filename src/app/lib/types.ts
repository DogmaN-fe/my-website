import { ChangeEvent } from "react";

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

/**
 * Интерфейс для данных из формы
 */
export interface IFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Интерфейс для компонента CustomInput
 */
export interface ICustomInputProps {
  text: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}