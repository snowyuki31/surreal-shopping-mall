// /models/Product.ts

import { LanguageType } from "./LanguageType";
import { convertTagToView, Tag, TagView } from "./Tag";

export interface Product {
  id: string;
  name: string;
  nameEn: string;
  nameGalaxy: string;
  imageUrl: string;
  price: number;
  description: string;
  descriptionEn: string;
  descriptionGalaxy: string;
  tags: Tag[];
}

export interface ProductView {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  tags: TagView[];
}

export const convertProductToView = (
  product: Product,
  language: LanguageType
): ProductView => {
  let name: string;
  let description: string;

  switch (language) {
    case "en":
      name = product.nameEn;
      description = product.descriptionEn;
      break;
    case "galaxy":
      name = product.nameGalaxy;
      description = product.descriptionGalaxy;
      break;
    default:
      name = product.name;
      description = product.description;
  }

  return {
    name,
    imageUrl: product.imageUrl,
    price: product.price,
    description,
    tags: product.tags.map((tag) => convertTagToView(tag, language)),
  };
};
