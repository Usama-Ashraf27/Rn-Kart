import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../Components/Layout/Layout";
import {orderData} from '../../Components/data/OrderData'
import OrderItem from "../../Components/Form/OrderItem";

const MyOrder = () => {
  return (
    <Layout>
      <View style={styles.container}>
         <Text style={styles.heading}>MyOrder</Text>
         <ScrollView>
        {orderData.map((order)=>(
          <OrderItem key={order._id} order={order}/>
        ))}
         </ScrollView>
      </View>
    </Layout>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  container:{
    marginTop:10,
  },
  heading:{
    textAlign: 'center',
    color:'gray',
    fontWeight:'bold',
    fontSize:20,
  }
});
