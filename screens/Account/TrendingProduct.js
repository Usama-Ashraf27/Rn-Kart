import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Layout from "../../Components/Layout/Layout";
import ProductsCard from "../../Components/Products/ProductsCard";

const TrendingProduct = () => {
  const trendingProducts = [
    {
      _id: 1,
      name: "Essence Draw The Line Instant Color Lipliner",
      description: "These supple lipliners effortlessly glide over the lips to outline them. They are colour-coordinated with the ultra-last instant colour lipsticks, so now there's a matching lipliner to go with every shade. Thanks to the highly pigmented texture, you can trace any shape, and irregular outlines are a thing of the past! With an integrated sharpener.",
      price: 50,
      quantity: 20,
      category: "makeup",
      imageUrl: "https://cozmetica.pk/cdn/shop/products/EssenceDrawTheLineInstantColorLiplinerMain.jpg?v=1699333064",
    },
    {
      _id: 2,
      name: "Product 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam sit amet urna semper pretium.",
      price: 25,
      quantity: 15,
      category: "skincare",
      imageUrl: "https://cozmetica.pk/cdn/shop/products/EssenceDrawTheLineInstantColorLiplinerMain.jpg?v=1699333064",
    },
    {
      _id: 3,
      name: "Product 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam sit amet urna semper pretium.",
      price: 35,
      quantity: 10,
      category: "haircare",
      imageUrl: "https://cozmetica.pk/cdn/shop/products/EssenceDrawTheLineInstantColorLiplinerMain.jpg?v=1699333064",
    },
    // Add more static data entries here
    // ...
    {
      _id: 8,
      name: "Product 10",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam sit amet urna semper pretium.",
      price: 30,
      quantity: 18,
      category: "fragrance",
      imageUrl: "https://cozmetica.pk/cdn/shop/products/EssenceDrawTheLineInstantColorLiplinerMain.jpg?v=1699333064",
    },
    // {
    //   _id: 9,
    //   name: "Product 10",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam sit amet urna semper pretium.",
    //   price: 30,
    //   quantity: 18,
    //   category: "fragrance",
    //   imageUrl: "https://cozmetica.pk/cdn/shop/products/EssenceDrawTheLineInstantColorLiplinerMain.jpg?v=1699333064",
    // },
    // {
    //   _id: 11,
    //   name: "Product 10",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam sit amet urna semper pretium.",
    //   price: 30,
    //   quantity: 18,
    //   category: "fragrance",
    //   imageUrl: "https://cozmetica.pk/cdn/shop/products/EssenceDrawTheLineInstantColorLiplinerMain.jpg?v=1699333064",
    // },
    // {
    //   _id: 10,
    //   name: "Product 10",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id quam sit amet urna semper pretium.",
    //   price: 30,
    //   quantity: 18,
    //   category: "fragrance",
    //   imageUrl: "https://cozmetica.pk/cdn/shop/products/EssenceDrawTheLineInstantColorLiplinerMain.jpg?v=1699333064",
    // },
    
  ];

  return (
    <Layout>
     <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {trendingProducts.map((p, index) => (
          <View key={index} style={styles.productContainer}>
            <Image source={{ uri: p.imageUrl }} style={styles.productImage} />
            <Text>{p.name}</Text>
            <Text>RS{p.price}</Text>
          </View>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  productContainer: {
    width: "48%", // Adjust the width based on your design
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 5,
  },
});

export default TrendingProduct;
