// /models/Tag.ts

import { LanguageType } from "./LanguageType";

export interface Tag {
  id: string;
  name: string;
  nameEn: string;
  nameGalaxy: string;
}

export interface TagView {
  name: string;
}

export const convertTagToView = (tag: Tag, language: LanguageType): TagView => {
  let name: string;

  switch (language) {
    case "en":
      name = tag.nameEn;
      break;
    case "galaxy":
      name = tag.nameGalaxy;
      break;
    default:
      name = tag.name;
  }

  return {
    name,
  };
};
