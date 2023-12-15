import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,                                                                                                    
} from "react-native-responsive-screen";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",  
    stock: "",
    images: [],
  });

  const handleChange = (key, value) => {
    setProductData({ ...productData, [key]: value });
  };

  const handleImagePicker = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const newImage = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        setProductData({ ...productData, images: [newImage] });
      }
    });
  };

  const handleSubmit = () => {
    // Perform the logic to send the productData to your server or API
    console.log("Product Data:", productData);
    // Clear the form after submission
    setProductData({
      name: "",
      description: "",
      price: "",
      stock: "",
      images: [],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={productData.name}
          onChangeText={(text) => handleChange("name", text)}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={productData.description}
          onChangeText={(text) => handleChange("description", text)}
        />

        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          value={productData.price}
          onChangeText={(text) => handleChange("price", text)}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Stock:</Text>
        <TextInput
          style={styles.input}
          value={productData.stock}
          onChangeText={(text) => handleChange("stock", text)}
          keyboardType="numeric"
        />

        {/* <TouchableOpacity onPress={handleImagePicker}>
          <Text style={styles.label}>Choose Image</Text>
        </TouchableOpacity> */}

        {productData.images.length > 0 && (
          <Image
            source={{ uri: productData.images[0].uri }}
            style={styles.image}
          />
        )}
      </View>

      <TouchableOpacity style={styles.btn} onPress={()=>{
            navigation.navigate('checkout');
          }}>
            <Text style={styles.btntext}> 
            Create
            </Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("5%"), // Responsive padding based on width
  },
  inputContainer: {
    width: wp("80%"), // Responsive width based on width
  },
  label: {
    fontSize: wp("4%"), // Responsive font size based on width
    marginBottom: hp("1%"), // Responsive margin based on height
  },
  input: {
    height: hp("5%"), // Responsive height based on height
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: hp("2%"), // Responsive margin based on height
    paddingHorizontal: wp("2%"), // Responsive padding based on width
    borderRadius: wp("3%"), // Responsive border radius based on width
  },
  image: {
    width: "100%",
    height: hp("20%"), // Responsive height based on height
    resizeMode: "cover",
    marginTop: hp("2%"), // Responsive margin based on height
    borderRadius: wp("3%"), // Responsive border radius based on width
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

export default CreateProduct;
