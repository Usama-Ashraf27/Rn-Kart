import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Trending = () => {
  const trendingData = [
    {
      id: '1',
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet.',
      price: 'Rs 19.99',
      image: require('../assets/Trending/T1.jpg'),
    },
    {
      id: '2',
      title: 'Product 2',
      description: 'Consect adipis elit.',
      price: 'RS 29.99',
      image: require('../assets/Trending/T2.jpg'),
    },
    {
      id: '3',
      title: 'Product 3',
      description: 'Consecte adipisci elit.',
      price: 'RS 29.99',
      image: require('../assets/Trending/T2.jpg'),
    },
    // Add more products as needed
  ];

  const truncateDescription = (text, limit) => {
    if (text.split(' ').length > limit) {
      return text.split(' ').slice(0, limit).join(' ') + '...';
    } else {
      return text;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>
          {truncateDescription(item.description, 3)}
        </Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Products</Text>
      <FlatList
        data={trendingData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('2%'),
    backgroundColor:'#F9F6EE',
    marginTop:10,
  },
  heading: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    marginVertical: hp('1%'),
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: wp('2%'),
    margin: wp('2%'),
    padding: wp('2%'),
    width: wp('60%'),
  },
  productImage: {
    width: wp('20%'),
    height: wp('20%'),
    resizeMode: 'cover',
    borderRadius: wp('1%'),
  },
  productDetails: {
    marginLeft: wp('4%'),
  },
  productTitle: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: hp('1.5%'),
    color: 'gray',
  },
  productPrice: {
    fontSize: hp('2%'),
    color: 'green',
    marginTop: hp('1%'),
  },
});

export default Trending;
