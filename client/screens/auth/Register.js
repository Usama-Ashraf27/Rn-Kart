import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] =useState("");
  const [city, setCity]= useState("");
  const [phone,setPhone] = useState("");

  const handleRegister = () => {
    // Validation 
    if (!name || !email || !address || !password || !city || !phone){
        return 
    }
    // Handle registration logic here
    alert("Registration successful");
    navigation.navigate("login");
    // You can add further logic like making an API call to register the user
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/login/Login.png")}
          style={styles.logo}
        />
      </View>
      {/* <Text style={styles.label}>Name</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setName(text)}
      />
      {/* <Text style={styles.label}>Email</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      {/* <Text style={styles.label}>Password</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
        <TextInput
        style={styles.input}
        placeholder="Adresses"
        secureTextEntry
        onChangeText={(text) => setAddress(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="City"
        secureTextEntry
        onChangeText={(text) => setCity(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Phone Number"
        secureTextEntry
        onChangeText={(text) => setPhone(text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.login}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.loginText}>Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: hp("2%"), // Adjusted font size for responsiveness
    marginBottom: hp("1%"), // Adjusted margin for responsiveness
    alignSelf: "flex-start", // Align the label to the left
    marginLeft: hp("6%"), // Adjust
    fontWeight: "bold", // Adjust
  },

  heading: {
    fontSize: hp("3%"), // Adjusted font size for responsiveness
    fontWeight: "bold",
    marginBottom: hp("3%"), // Adjusted margin for responsiveness
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: hp("4%"), // Adjusted margin for responsiveness
  },
  logo: {
    width: wp("50%"), // Adjusted width for responsiveness
    height: hp("11%"), // Adjusted height for responsiveness
    resizeMode: "contain",
  },
  input: {
    height: hp("5%"), // Adjusted height for responsiveness
    width: wp("80%"), // Adjusted width for responsiveness
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: wp("5%"),
    marginBottom: hp("2%"), // Adjusted margin for responsiveness
    paddingHorizontal: wp("3%"), // Adjusted padding for responsiveness
  },
  registerButton: {
    backgroundColor: "#DE3163",
    marginTop: hp("2%"), // Adjust
    width: wp("80"), // Adjust
    paddingVertical: hp("1.7%"), // Adjusted padding for responsiveness
    borderRadius: wp("5%"), // Making the button rounded
    alignItems: "center",
  },
  registerButtonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: hp("1.9%"), // Adjusted font size for responsiveness
  },
  login: {
    flexDirection: "row",
    marginTop: hp("2%"), // Adjusted margin for responsiveness
  },
  loginText: {
    color: "#DE3163",
    fontWeight: "bold",
  },
});

export default Register;
