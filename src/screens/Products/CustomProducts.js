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
import Layout from '../../components/Layout/Layout';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/Ui/TextFields/CustomInput';
import Option from '../../components/Ui/Profile/Option';

export default function CustomProducts() {
  const navigation = useNavigation();

  const products = [
    {
      id: '1',
      title: 'Coffee Chair',
      image: require('../../assets/images/product-images/cozychair.png'),
      desc: 'Introducing our exquisitely crafted furniture collection, designed to...',
      date: '19/02/2023',
      complete: true,
    },
    {
      id: '2',
      title: 'Minimal Desk',
      image: require('../../assets/images/product-images/desk.png'),
      desc: 'Introducing our exquisitely crafted furniture collection, designed to...',
      date: '19/02/2023',
      complete: true,
    },
    {
      id: '3',
      title: 'Wardrobe',
      image: require('../../assets/images/product-images/newwardrobe.png'),
      desc: 'Introducing our exquisitely crafted furniture collection, designed to...',
      date: '19/02/2023',
      complete: false,
    },
    {
      id: '4',
      title: 'Modern Bed',
      image: require('../../assets/images/product-images/singlebed.png'),
      desc: 'Introducing our exquisitely crafted furniture collection, designed to...',
      date: '19/02/2023',
      complete: false,
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      className="p-1 bg-white shadow-sm shadow-gray-400 border-[1px] border-gray-200 w-[95%] mx-auto my-[6px] rounded-xl flex flex-row justify-start space-x-2">
      <Image source={item.image} className="w-[100px] h-[100px] rounded-lg" />
      <View className=" w-[65%]">
        <View className="flex flex-row items-center justify-between">
          <Text
            className=" text-blue-500 font-medium"
            style={{fontSize: hp('2.0%')}}>
            {item.title}
          </Text>
          {item.complete ? (
            <View className="flex flex-row items-center space-x-[3px]">
              <View className="h-2 w-2 rounded-full bg-green-600 "></View>
              <Text
                className="text-gray-800 font-medium"
                style={{fontSize: hp('1.5%')}}>
                Approved
              </Text>
            </View>
          ) : (
            <View className="flex flex-row items-center space-x-[2px]">
              <View className="h-2 w-2 rounded-full bg-red-600 "></View>
              <Text
                className="text-gray-800 font-medium"
                style={{fontSize: hp('1.5%')}}>
                Pending
              </Text>
            </View>
          )}
        </View>
        <Text className="text-gray-600 my-2" style={{fontSize: hp('1.7%')}}>
          {item.desc}
        </Text>
        <Text className="text-gray-900 my-2" style={{fontSize: hp('2%')}}>
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="bg-white">
      <View className="h-full" style={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          <View className="bg-white flex flex-row items-center justify-center w-full border-b-[1px] border-gray-200 mt-2 pb-4">
            <TouchableOpacity
              underlayColor={`${'#e5e7eb'}`}
              className={'bg-transparent rounded-full absolute left-3 bottom-3'}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon
                name={'chevron-back-outline'}
                size={24}
                color={`${'#374151'}`}
              />
            </TouchableOpacity>
            <Text
              className="text-gray-700 text-center font-medium"
              style={{fontSize: hp('2.2%')}}>
              Custom Product
            </Text>
          </View>
          <FlatList
            data={products}
            className="pt-2"
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
        <View className="px-5 pb-4">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('AddProduct')}
            className="bg-[#3669c9] absolute right-4 bottom-4 w-16 h-16 mx-auto flex items-center justify-center rounded-full py-3.5 shadow-md shadow-gray-700">
            <Text className="font-bold">
              <Icon name={'add'} size={26} color={`${'#f8fafc'}`} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
