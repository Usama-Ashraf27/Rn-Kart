import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../Components/Layout/Layout";
import AntDesign from "react-native-vector-icons/AntDesign";
import { userData } from "../../Components/data/UserData";
import { useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Account = ({ navigation }) => {
  const route = useRoute();

  return (
    <Layout>
      <View style={styles.container}>
        <Image source={{ uri: userData.profilePic }} style={styles.image} />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.name}>
            Hi
            <Text style={{ color: "green" }}> {userData.name}</Text>
            👋
          </Text>
          <Text>Email : {userData.email}</Text>
          <Text>Contact : {userData.contact}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Text style={styles.heading}>Account Setting</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("profile", { id: userData._id })}
          >
            <AntDesign style={styles.btnText} name="edit" />
            <Text style={styles.btnText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate("myorders", { id: userData._id })
            }
          >
            <AntDesign style={styles.btnText} name="bars" />
            <Text style={styles.btnText}>My Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("notifications")}
          >
            <AntDesign style={styles.btnText} name="bells" />
            <Text style={styles.btnText}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate("adminPanel", { id: userData._id })
            }
          >
            <AntDesign style={styles.btnText} name="windows" />
            <Text style={styles.btnText}>Admin Panel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              alert("Logout Successfully"), navigation.navigate("login");
            }}
          >
            <AntDesign style={styles.btnText} name="logout" />
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hp("2%"),
  },
  image: {
    height: hp("15%"),
    width: wp("100%"),
    resizeMode: "contain",
  },
  name: {
    marginTop: hp("1%"),
    fontSize: hp("3%"),
  },
  btnContainer: {
    padding: hp("1%"),
    backgroundColor: "#ffffff",
    margin: hp("1%"),
    marginVertical: hp("2%"),
    elevation: 5,
    borderRadius: hp("1%"),
    paddingBottom: hp("3%"),
  },
  heading: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    paddingBottom: hp("1%"),
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp("1%"),
    padding: hp("0.5%"),
  },
  btnText: {
    fontSize: hp("2%"),
    marginRight: hp("1%"),
  },
});

export default Account;
