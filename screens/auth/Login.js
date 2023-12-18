import React, { useState ,useEffect} from "react";
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

//redux hooks
import { login } from "../../redux/features/auth/userActions";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //hooks
  const dispatch = useDispatch();
  //global state
  const { loading, error, message } = useSelector((state) => state.user);

  // Handle login logic here
  const handleLogin = () => {
    // if (!email || !password) {
    //   return alert("Please enter your email address and password here ");
    // }
    // dispatch(login(email, password));
   

    // alert("Login successful");
    navigation.navigate("Home");
  };
//life Cycle
// useEffect(()=>{
//   if(error){
//     alert(error);
//     dispatch({type:'clearError'})}
//     if(message){
//       alert(message);
//       dispatch({type:'clearMessage'})   
//       navigation.navigate("Home");
//     }
  
// },[error, message,dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/login/Login.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <Text>Don't have an Account? </Text>
          <Text
            style={styles.signuptext}
            onPress={() => {
              navigation.navigate("register");
            }}
          >
            Sign Up{" "}
          </Text>
        </View>
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
  logoContainer: {
    alignItems: "center",
    marginBottom: hp("4%"), // Adjusted margin for responsiveness
  },
  logo: {
    width: wp("50%"), // Adjusted width for responsiveness
    height: hp("11%"), // Adjusted height for responsiveness
    resizeMode: "contain",
  },
  formContainer: {
    width: wp("80%"), // Adjusted width for responsiveness
  },
  label: {
    fontSize: hp("2%"), // Adjusted font size for responsiveness
    marginBottom: hp("1%"), // Adjusted margin for responsiveness
    fontWeight: "bold", // Adjust
  },
  input: {
    height: hp("5%"), // Adjusted height for responsiveness
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: wp("5%"),
    marginBottom: hp("2%"), // Adjusted margin for responsiveness
    paddingHorizontal: wp("3%"), // Adjusted padding for responsiveness
  },
  loginButton: {
    backgroundColor: "#DE3163",
    marginTop: hp("2%"), // Adjust
    paddingVertical: hp("1.7%"), // Adjusted padding for responsiveness
    borderRadius: wp("5%"), // Making the button rounded
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: hp("1.9%"), // Adjusted font size for responsiveness
  },
  signup: {
    flexDirection: "row",
    marginTop: hp("2%"),
    justifyContent: "center",
  },
  signuptext: {
    color: "#DE3163",
    fontWeight: "bold",
  },
});

export default Login;
