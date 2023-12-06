import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { CartData } from "../Components/data/CartData";
import PriceTable from "../Components/Cart/PriceTable";
import Layout from "../Components/Layout/Layout";
import CartItem from "../Components/Cart/CartItem";

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(CartData);
  
  return (
    <Layout>
      <Text
        style={[
          styles.heading,
          cartItems.length === 0 ? styles.emptyCart : null,
        ]}
      >
        {cartItems?.length > 0
          ? `You have ${cartItems.length} Items Left In Your Cart`
          : "Oops Your Cart is Empty"}
      </Text>
      {cartItems?.length>0 && (
        <>
        <ScrollView>
          {cartItems.map(item=>(
             <CartItem item={item} key={item._id}/>
          ))}
         
        </ScrollView>
           
          <View>
            <PriceTable title={"Price"} price={999} />
            <PriceTable title={"Tax"} price={1} />
            <PriceTable title={"Shipping"} price={1} />
            <View style={styles.grandTotal}>
              <PriceTable title={"Total"} price={1001} />
            </View>
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>{
            navigation.navigate('checkout');
          }}>
            <Text style={styles.btntext}> 
            Checkout
            </Text>
          </TouchableOpacity>
        </>
      )}
    </Layout>
  );
};

export default Cart;

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    marginTop: 10,
  },
  emptyCart: {
    color: "red", // Set the color to red when the cart is empty
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "LightGray",
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btn:{
    marginTop:20,
    alignItems: "center",
    justifyContent: "center",
    height:40,
    backgroundColor: "black",
    width:'90%',
    marginHorizontal:20,
    borderRadius:20,

  },
  btntext:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  }
});
