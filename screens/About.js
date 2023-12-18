// About.js
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "https://imatrix.com/wp-content/uploads/sites/12/2021/03/ecommerce-1024x536.jpg" }}
        style={styles.image}
      />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        
An E-commerce application is a digital platform that facilitates online buying and selling of goods and services. It brings together buyers and sellers in a virtual marketplace, providing a convenient and efficient way to conduct commercial transactions over the internet.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    marginTop:'15%'
   
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default About;
