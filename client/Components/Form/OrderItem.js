import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <Text>OderItem {order.status}</Text>
      <View style={styles.orderinfo}>
        <Text>Order ID : {order._id}</Text>
        <Text>Order Date : {order.date}</Text>
      </View>
      <Text> Product Name : {order.productInfo.name}</Text>
      <Text> Price : {order.productInfo.price}</Text>
      <Text> Quantity : {order.productInfo.qty}</Text>
      <Text> Total Amount : {order.totalAmount} Rs</Text>
      <Text style={styles.status}> Status : {order.status}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  orderinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    fontWeight: "bold",
    borderColor: "lightgray",
    padding:5,
  },
});
