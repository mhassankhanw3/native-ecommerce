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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../components/Ui/HomeScreen/SearchBar';
import Button from '../../components/Button/Button';

export default function DetailProduct() {
  const [searchProduct, setSearchProduct] = useState('');

  const navigation = useNavigation();
  const backgroundColor = 'white';
  const textColor = 'dark-content';
  return (
    <View className="bg-white">
      <StatusBar barStyle={textColor} backgroundColor={backgroundColor} />
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          <View className="flex flex-row items-center justify-between w-full border-b border-gray-300 mt-2 pb-4 px-3">
            <View className="flex flex-row items-center justify-between w-[67%]">
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
                Detail Product
              </Text>
            </View>
            {/* <Ionicons name={'search'} size={24} color="#374151" /> */}
          </View>
          <View className="px-2 my-3">
            <Image
              source={require('../../assets/images/product-images/detail.png')}
              className="w-full h-64 rounded-lg mx-auto"
            />
            <View className="px-3">
              <Text
                className="text-blue-600 font-medium my-1"
                style={{fontSize: hp('3.2%')}}>
                Minimal Chair
              </Text>
              <View className="flex flex-row items-center justify-between">
                <Text
                  className="text-gray-600 font-medium"
                  style={{fontSize: hp('2.0%')}}>
                  $ 25.00
                </Text>
                <Text
                  className="text-gray-600 font-medium"
                  style={{fontSize: hp('2.0%')}}>
                  CBM 13
                </Text>
              </View>
              <View className="mt-2">
                <Text
                  className="text-gray-800 font-bold"
                  style={{fontSize: hp('2.5%')}}>
                  Product Description
                </Text>
                <Text
                  className="text-gray-600 leading-6 font-medium my-2"
                  style={{fontSize: hp('1.9%')}}>
                  Introducing our exquisitely crafted furniture collection,
                  designed to transform your living spaces into havens of style,
                  comfort, and functionality. Each piece in our collection is
                  meticulously created with a blend of contemporary aesthetics,
                  exceptional craftsmanship, and premium...
                </Text>
              </View>
              <View className="my-2 flex flex-row items-center justify-start space-x-2">
                <AntDesign
                  name={'exclamationcircleo'}
                  size={20}
                  color={`${'#374151'}`}
                />
                <View className="flex flex-row items-center">
                  <Text
                    className="text-gray-800 font-medium"
                    style={{fontSize: hp('1.7%')}}>
                    You can order minimum
                  </Text>
                  <Text
                    className="text-gray-700 font-bold"
                    style={{fontSize: hp('1.7%')}}>
                    {' '}
                    4 items
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className="px-2 mb-3">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('OrderStack', {
                screen: 'AddToCart',
              })
            }
            className="bg-[#3669c9] max-w-full w-full mx-auto flex items-center justify-center rounded-[10px] py-3.5 shadow-md shadow-gray-700">
            <Text
              className="text-[#eaeff9] font-medium"
              style={{fontSize: hp('2%')}}>
              Add To Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
