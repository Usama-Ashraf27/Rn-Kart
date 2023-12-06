import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Cartitem = ({ item }) => {
  const [qty, setQty] = useState(1);

  // Handle function for + -
  const handleAddQty = () => {
    if (qty === 10) return alert("You can't add more than 10 quantity");
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item?.imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.name}> {item?.name}</Text>
        <Text style={styles.name}> Price : {item?.price} $</Text>
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    margin: wp('2%'),
    backgroundColor: "#ffffff",
    borderRadius: wp('2%'),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: hp('5%'),
    width: hp('5%'),
    resizeMode: "contain",
  },
  name: {
    fontSize: hp('1.5%'),
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp('3%'),
    marginHorizontal: wp('1%'),
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: wp('5%'),
    alignItems: "center",
    marginHorizontal: wp('1%'),
  },
  btnQtyText: {
    fontSize: hp('2%'),
  },
});

export default Cartitem;
