import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../Components/Layout/Layout";
import Categories from "../Components/category/Categories";
import Header from "../Components/Layout/Header";
import Banner from "../Components/Banner/Banner";
import Products from "../Components/Products/Products";
import Trending from "./Trending";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Categories />
        <Banner />
        <Trending />

        <Products />
      </Layout>
    </>
  );
};

export default Home;
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });
