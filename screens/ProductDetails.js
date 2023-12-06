import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductsData } from "../Components/data/ProductsData";
import Layout from "../Components/Layout/Layout";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProductDetails = ({ route }) => {
  const [pDetails, setPDetails] = useState({});
  const [qty, setQty] = useState(1);

  // get product details
  useEffect(() => {
    //find product details
    const getProudct = ProductsData.find((p) => {
      return p?._id === params?._id;
    });
    setPDetails(getProudct);
  }, [params?._id]);

  // Handle function for + -
  const handleAddQty = () => {
    if (qty === 10) return alert("you cant add more than 10 quantity");
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  const { params } = route;

  return (
    <Layout>
      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{pDetails?.name}</Text>
        <Text style={styles.title}>Price : {pDetails?.price} $</Text>
        <Text style={styles.desc}>Price : {pDetails?.description} </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${qty} items added to cart`)}
            disabled={pDetails?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {pDetails?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
              <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
              <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: hp('50%'),
    width: wp('100%'),
  },
  container: {
    marginVertical: hp('1.5%'),
    marginHorizontal: wp('2%'),
  },
  title: {
    fontSize: wp('4.5%'),
    textAlign: "left",
  },
  desc: {
    fontSize: wp('3.3%'),
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: hp('1%'),
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp('2%'),
    marginHorizontal: wp('2%'),
  },
  btnCart: {
    width: wp('40%'),
    backgroundColor: "#000000",
    borderRadius: wp('1%'),
    height: hp('6%'),
    justifyContent: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: wp('3.5%'),
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: wp('12%'),
    alignItems: "center",
    marginHorizontal: wp('2%'),
  },
  btnQtyText: {
    fontSize: wp('5%'),
  },
});

export default ProductDetails;
