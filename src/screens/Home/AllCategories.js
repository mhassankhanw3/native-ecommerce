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
import Icon from 'react-native-vector-icons/Ionicons';

export default function Categories() {
  const navigation = useNavigation();
  const backgroundColor = 'white';
  const textColor = 'dark-content';

  const categories = [
    {
      id: '1',
      title: 'Tables',
      image: require('../../assets/images/category-images/newtable.png'),
      color: '#e4f3ea',
    },
    {
      id: '2',
      title: 'Chair',
      image: require('../../assets/images/category-images/chair.png'),
      color: '#ffece8',
    },
    {
      id: '3',
      title: 'Wardrobe',
      image: require('../../assets/images/category-images/wardrobe.png'),
      color: '#fff6e4',
    },
    {
      id: '4',
      title: 'Beds',
      image: require('../../assets/images/category-images/bed.png'),
      color: '#f1edfc',
    },
    {
      id: '5',
      title: 'Sofa',
      image: require('../../assets/images/category-images/newsofa.png'),
      color: '#e4f3ea',
    },
    {
      id: '6',
      title: 'Lamps',
      image: require('../../assets/images/category-images/lamp.png'),
      color: '#d4f1f9',
    },
    {
      id: '7',
      title: 'Bookshelf',
      image: require('../../assets/images/category-images/bookshelf.png'),
      color: '#fde8d7',
    },
    {
      id: '8',
      title: 'Tables',
      image: require('../../assets/images/category-images/newtable.png'),
      color: '#e4f3ea',
    },
  ];

  return (
    <View className="bg-white">
      <StatusBar barStyle={textColor} backgroundColor={backgroundColor} />
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          <View className="bg-white flex flex-row items-center justify-between w-full border-b-[1px] border-gray-200 mt-2 pb-4 px-3">
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
              Categories
            </Text>
            <Ionicons name={'search'} size={24} color="#374151" />
          </View>
          <View className="flex flex-row flex-wrap items-start justify-start gap-4 mt-4 w-[95%] mx-auto">
            {categories.map(category => (
              <View key={category.id} className="text-center overflow-hidden">
                <View
                  className="rounded-lg flex items-center justify-center text-center"
                  style={[
                    {height: hp('10.2%'), width: wp('26.4%')},
                    {backgroundColor: category.color},
                  ]}>
                  <Image
                    source={category.image}
                    className=""
                    style={{width: wp('12.2%'), height: hp('7.5%')}}
                  />
                </View>
                <Text
                  className="text-gray-600 font-medium text-center mx-auto w-[90px]"
                  style={{fontSize: hp('1.9%')}}>
                  {category.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
