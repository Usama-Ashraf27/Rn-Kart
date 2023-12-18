import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from "../Components/Layout/Layout";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Checkout = ({ navigation }) => {
  const handleCOD = () => {
    alert("Your Order Has Been Placed Successfully");
  };

  const handleOnline = () => {
    alert("Your Redirecting to payment gateway");
    navigation.navigate("payment");
  };

  return (
    <Layout>
      <View style={Styles.container}>
        <Text style={Styles.heading}>Payment Options</Text>
        <Text style={Styles.price}>Total Amount : 101$</Text>
        <View style={Styles.paymentCard}>
          <Text style={Styles.paymentHeading}>Select your Payment Mode</Text>
          <TouchableOpacity style={Styles.paymentBtn} onPress={handleCOD}>
            <Text style={Styles.paymentBtnText}>Cash On Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.paymentBtn} onPress={handleOnline}>
            <Text style={Styles.paymentBtnText}>
              Online (CREDIT | DEBIT CARD)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: hp('80%'),
  },
  heading: {
    fontSize: hp('3.5%'), // Adjusted font size
    fontWeight: "500",
    marginVertical: hp('2%'),
  },
  price: {
    fontSize: hp('2%'), // Adjusted font size
    marginBottom: hp('2%'),
    color: "gray",
  },
  paymentCard: {
    backgroundColor: "#ffffff",
    width: wp('90%'),
    borderRadius: wp('2%'),
    padding: wp('5%'),
    marginVertical: hp('2%'),
  },
  paymentHeading: {
    color: "gray",
    marginBottom: hp('2%'),
  },
  paymentBtn: {
    backgroundColor: "#000000",
    height: hp('5%'),
    borderRadius: wp('2%'),
    justifyContent: "center",
    marginVertical: hp('2%'),
  },
  paymentBtnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: hp('2%'), // Adjusted font size
  },
});

export default Checkout;
