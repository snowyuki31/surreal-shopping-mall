// /pages/index.tsx

import React from "react";
import { convertProductToView, Product } from "@/models/Product";
import { convertTagToView, Tag } from "@/models/Tag";
import Layout from "@/components/template/Layout";
import ProductCard from "@/components/organisms/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

import { Grid, List, ListItem, Typography } from "@mui/material";

const sampleTags: Tag[] = [
  { id: "1", name: "シュール", nameEn: "Surreal", nameGalaxy: "Zlirk" },
  { id: "2", name: "珍品", nameEn: "Rare item", nameGalaxy: "Yooqz" },
];

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "シュールな商品1",
    nameEn: "Surreal Product 1",
    nameGalaxy: "Zlirk Glibzox 1",
    imageUrl: "https://via.placeholder.com/150",
    price: 1000,
    description: "シュールでユニークな商品の説明文1。",
    descriptionEn: "Surreal and unique product description 1.",
    descriptionGalaxy: "Zlirk zog grebbits oxotrokz 1.",
    tags: sampleTags,
  },
  {
    id: "2",
    name: "シュールな商品2",
    nameEn: "Surreal Product 2",
    nameGalaxy: "Zlirk Glibzox 2",
    imageUrl: "https://via.placeholder.com/150",
    price: 2000,
    description: "シュールでユニークな商品の説明文2。",
    descriptionEn: "Surreal and unique product description 2.",
    descriptionGalaxy: "Zlirk zog grebbits oxotrokz 2.",
    tags: sampleTags,
  },
];
const HomePage = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5" gutterBottom>
            Tags
          </Typography>
          <List>
            {sampleTags.map((tag) => (
              <ListItem key={tag.id}>
                {convertTagToView(tag, language).name}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Typography variant="h5" gutterBottom>
            Products
          </Typography>
          <Grid container spacing={2}>
            {sampleProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard
                  product={convertProductToView(product, language)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
