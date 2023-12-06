import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { userData } from "../../Components/data/UserData";
import Layout from "../../Components/Layout/Layout";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Profile = ({ navigation }) => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [profilePic, setProfilePic] = useState(userData.profilePic);
  const [address, setAddress] = useState(userData.address);
  const [city, setCity] = useState(userData.city);
  const [contact, setContact] = useState(userData.contact);

  const handleUpdate = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please provide all fields");
    }
    alert("profile updat Successfully");
    navigation.navigate("account");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image style={styles.image} source={{ uri: userData.profilePic }} />
            <Pressable>
              <Text
                style={{ color: "red", alignSelf: "center", marginTop: "2px" }}
              >
                {" "}
                Update Your Profile Pic
              </Text>
              <TextInput
                style={styles.input}
                value={name}
                setValue={setName}
                placeholder="Please Entre a name"
              />
              <TextInput
                style={styles.input}
                value={email}
                setValue={setEmail}
                editable={false} // Set this to false to make the TextInput non-editable
                placeholder="Please Entre a Email"
              />
              <TextInput
                style={styles.input}
                value={password}
                setValue={setPassword}
                placeholder="Please Entre a Passwords"
              />
              <TextInput
                style={styles.input}
                value={address}
                setValue={setAddress}
                placeholder="Please Entre a Address"
              />
              <TextInput
                style={styles.input}
                value={city}
                setValue={setCity}
                placeholder="Please Entre a City"
              />
              <TextInput
                style={styles.input}
                value={contact}
                setValue={setContact}
                placeholder="Please Entre a Contact"
              />
            </Pressable>
            <TouchableOpacity style={styles.loginUpdate} onPress={handleUpdate}>
              <Text style={styles.loginUpdateText}>Update</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageConatiner: {},
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  input: {
    height: hp("5%"), // Adjusted height for responsiveness
    borderColor: "gray",
    width: wp("80%"),
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: wp("5%"),
    marginTop: hp("2%"), // Adjusted margin for responsiveness
    paddingHorizontal: wp("3%"), // Adjusted padding for responsiveness
  },
  loginUpdate: {
    backgroundColor: "black",
    marginTop: hp("2%"), // Adjust
    paddingVertical: hp("1.7%"), // Adjusted padding for responsiveness
    borderRadius: wp("5%"), // Making the button rounded
    alignItems: "center",
  },
  loginUpdateText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: hp("1.9%"), // Adjusted font size for responsiveness
  },
});
