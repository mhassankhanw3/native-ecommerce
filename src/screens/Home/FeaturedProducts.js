import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  Pressable,
  StatusBar,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Layout from '../../components/Layout/Layout';
import BackBtn from '../../components/Button/BackBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../components/Ui/HomeScreen/SearchBar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function FeaturedProducts() {
  const [searchProduct, setSearchProduct] = useState('');

  const navigation = useNavigation();
  const backgroundColor = 'white';
  const textColor = 'dark-content';
  const products = [
    {
      id: '1',
      title: 'Coffee Chair',
      image: require('../../assets/images/product-images/cozychair.png'),
      price: '1.500.000',
      rating: '4.6',
      reviews: '86',
    },
    {
      id: '2',
      title: 'Minimal Desk',
      image: require('../../assets/images/product-images/desk.png'),
      price: '1.200.000',
      rating: '2.6',
      reviews: '26',
    },
    {
      id: '3',
      title: 'Wardrobe',
      image: require('../../assets/images/product-images/newwardrobe.png'),
      price: '1.600.000',
      rating: '4.2',
      reviews: '16',
    },
    {
      id: '4',
      title: 'Modern Bed',
      image: require('../../assets/images/product-images/singlebed.png'),
      price: '1.100.000',
      rating: '1.6',
      reviews: '76',
    },
    {
      id: '5',
      title: 'Comfy Sofa',
      image: require('../../assets/images/product-images/singlesofa.png'),
      price: '2.700.000',
      rating: '8.6',
      reviews: '106',
    },
    {
      id: '6',
      title: 'Stylish Lamp',
      image: require('../../assets/images/product-images/newlamb.png'),
      price: '1.120.000',
      rating: '6.2',
      reviews: '98',
    },
    {
      id: '7',
      title: 'Bookshelf Set',
      image: require('../../assets/images/product-images/newbookshelf.png'),
      price: '4.500.000',
      rating: '9.9',
      reviews: '206',
    },
    {
      id: '8',
      title: 'Dining Table',
      image: require('../../assets/images/product-images/diningtable.png'),
      price: '3.200.000',
      rating: '7.4',
      reviews: '124',
    },
    {
      id: '9',
      title: 'Cozy Armchair',
      image: require('../../assets/images/product-images/armchair.png'),
      price: '2.000.000',
      rating: '5.8',
      reviews: '62',
    },
    {
      id: '10',
      title: 'Cozy Armchair',
      image: require('../../assets/images/product-images/armchair.png'),
      price: '2.000.000',
      rating: '5.8',
      reviews: '62',
    },
    {
      id: '11',
      title: 'Cozy Armchair',
      image: require('../../assets/images/product-images/armchair.png'),
      price: '2.000.000',
      rating: '5.8',
      reviews: '62',
    },
  ];

  const renderItem = ({item, index}) => {
    const isLastTwoItems = index >= products.length - 2;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailProduct')}
        className="p-1 bg-white my-1 mx-1 rounded-xl flex flex-col"
        style={{width: wp('45%'), height: hp('29.2%')}}>
        <Image
          source={item.image}
          className="w-[155px] h-[130px] rounded-lg mx-auto"
        />
        <View className="mt-2 mb-1 ml-1">
          <Text
            className="text-gray-600 font-medium"
            style={{fontSize: hp('2.4%')}}>
            {item.title}
          </Text>
          <Text
            className="text-blue-500 font-medium"
            style={{fontSize: hp('1.6%')}}>
            Rp. {item.price}
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between px-1">
          <View className=" flex flex-row items-center space-x-2">
            <Text
              className="text-gray-500 flex flex-row items-center"
              style={{fontSize: hp('1.6%')}}>
              <Text className="text-yellow-500" style={{fontSize: hp('2%')}}>
                &#9733;
              </Text>{' '}
              {item.rating}
            </Text>
            <Text
              className="text-gray-500 flex flex-row items-center"
              style={{fontSize: hp('1.6%')}}>
              {item.reviews} Reviews
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            className="rounded-full active:bg-gray-300 focus:bg-gray-400">
            <MaterialCommunityIcons
              name={'dots-vertical'}
              size={20}
              color={'#a1a1aa'}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="bg-[#fafafa] pb-14" style={{flexGrow: 1}}>
      <View className="flex bg-white flex-row items-center justify-between w-full border-b-[1px] border-gray-200 pt-2 pb-4 px-3">
        <View className="flex flex-row items-center justify-between w-[70%]">
          <TouchableOpacity
            underlayColor={`${'#e5e7eb'}`}
            className={'bg-transparent rounded-full'}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'chevron-back'} size={24} color={`${'#374151'}`} />
          </TouchableOpacity>
          <Text
            className="text-gray-700 text-center font-medium"
            style={{fontSize: hp('2.2%')}}>
            Featured Products
          </Text>
        </View>
        {/* <Ionicons name={'search'} size={24} color="#374151" /> */}
      </View>
      <FlatList
        data={products}
        className="pt-4 mx-auto"
        // horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
