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
import Button from '../../components/Button/Button';

export default function Order() {
  // const [searchProduct, setSearchProduct] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const navigation = useNavigation();
  const backgroundColor = 'white';
  const textColor = 'dark-content';

  const addToCart = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        ),
      );
    } else {
      setCartItems(prevItems => [...prevItems, {...item, quantity: 1}]);
    }
  };

  const removeFromCart = itemId => {
    setCartItems(prevItems =>
      prevItems.filter(cartItem => cartItem.id !== itemId),
    );
  };

  const increaseQuantity = itemId => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === itemId
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem,
      ),
    );
  };

  const decreaseQuantity = itemId => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === itemId && cartItem.quantity > 0
          ? {...cartItem, quantity: cartItem.quantity - 1}
          : cartItem,
      ),
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0,
    );
  };

  const products = [
    {
      id: '1',
      title: 'Coffee Chair',
      image: require('../../assets/images/product-images/cozychair.png'),
      price: '25.00',
      rating: '4.6',
      reviews: '86',
    },
    {
      id: '2',
      title: 'Minimal Desk',
      image: require('../../assets/images/product-images/desk.png'),
      price: '15.00',
      rating: '2.6',
      reviews: '26',
    },
    {
      id: '3',
      title: 'Wardrobe',
      image: require('../../assets/images/product-images/newwardrobe.png'),
      price: '410.00',
      rating: '4.2',
      reviews: '16',
    },
    {
      id: '4',
      title: 'Modern Bed',
      image: require('../../assets/images/product-images/singlebed.png'),
      price: '100.00',
      rating: '1.6',
      reviews: '76',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => addToCart(item)}
      className="p-1 bg-white border-b border-gray-200 w-full my-1 rounded-xl flex flex-row justify-start space-x-2"
      // style={{width: wp('65%'), height: hp('40%')}}
    >
      <Image source={item.image} className="w-[100px] h-[100px] rounded-lg" />
      <View className=" w-[68%]">
        <View className="flex flex-row items-center justify-between">
          <Text
            className=" text-blue-500 font-medium"
            style={{fontSize: hp('1.8%')}}>
            {item.title}
          </Text>
          <TouchableOpacity
            className=""
            activeOpacity={0.8}
            onPress={() => removeFromCart(item.id)}>
            <Ionicons
              name={'close-circle-outline'}
              size={22}
              color={'#4b5563'}
            />
          </TouchableOpacity>
        </View>
        <Text
          className="text-gray-600 font-medium"
          style={{fontSize: hp('1.7%')}}>
          $ {item.price}
        </Text>
        <View className="flex flex-row items-center justify-between px-1 mt-4">
          <View className=" flex flex-row items-center space-x-2">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => increaseQuantity(item.id)}
              className="bg-gray-200 rounded-md w-6 h-6 flex flex-col items-center justify-center">
              <Text
                className="text-gray-700 font-normal text-center"
                style={{fontSize: hp('2%')}}>
                +
              </Text>
            </TouchableOpacity>
            <Text
              className="text-gray-800 font-medium"
              style={{fontSize: hp('2%')}}>
              04
            </Text>
            <TouchableOpacity
              onPress={() => decreaseQuantity(item.id)}
              activeOpacity={0.7}
              className="bg-gray-200 rounded-md w-6 h-6 flex flex-col items-center justify-center">
              <Text
                className="text-gray-700 font-normal text-center"
                style={{fontSize: hp('2%')}}>
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View className="rounded-full active:bg-gray-300 focus:bg-gray-400">
            <Text>CBM 2</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="bg-white">
      <StatusBar barStyle={textColor} backgroundColor={backgroundColor} />
      <View style={{flexGrow: 1}} className="h-[83%]">
        <View className="flex flex-row items-center justify-center w-full border-b border-gray-300 mt-2 pb-4 px-3">
          <Text
            className="text-gray-700 text-center font-medium"
            style={{fontSize: hp('2.2%')}}>
            Cart
          </Text>
        </View>
        <FlatList
          data={products}
          className="mt-4 p-2"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View className="px-6">
        <View className="flex flex-row items-center justify-between">
          <Text
            className="text-gray-400 font-medium"
            style={{fontSize: hp('2%')}}>
            Advance payment
          </Text>
          <Text
            className="text-gray-700 font-medium"
            style={{fontSize: hp('2%')}}>
            $ 45.00
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between my-2">
          <Text
            className="text-gray-400 font-medium"
            style={{fontSize: hp('2%')}}>
            Total:
          </Text>
          <Text
            className="text-gray-700 font-medium"
            style={{fontSize: hp('2%')}}>
            $ 95.00
          </Text>
        </View>
      </View>
      <View className="px-2">
        <Button title={'Check Out'} navigate={'EnterPaymentDetail'} />
      </View>
      {/* <Text>AddToCart</Text> */}
    </View>
  );
}
