// Products.js
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProductsCard from "./ProductsCard";
import { ProductsData } from "../data/ProductsData";

const Products = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {ProductsData.map((p, index) => (
          <ProductsCard key={p._id} p={p} index={index} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
});

export default Products;
