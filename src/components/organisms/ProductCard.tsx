// /components/ProductCard.tsx

import React from "react";
import { ProductView } from "@/models/Product";

interface ProductProps {
  product: ProductView;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>Tags: {product.tags.map((tag) => tag.name).join(", ")}</p>
    </div>
  );
};

export default ProductCard;
