import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Banner() {
  return (
    <Pressable className="bg-[#695c5c] mt-2 rounded-xl p-4 flex flex-row items-center justify-between ">
      <View className="flex flex-col items-start space-y-1">
        <Text
          className="text-white font-medium"
          style={{fontSize: hp('2.8%'), width: wp('34%')}}>
          Comfortable Chair
        </Text>
        <Pressable
          className="flex flex-row items-center justify-between "
          style={{width: wp('26%'), height: hp('4%')}}>
          <Text
            className="text-gray-200 font-medium"
            style={{fontSize: hp('2%')}}>
            Shop now
          </Text>
          <Feather name={'arrow-right'} size={20} color={'#ffffff'} />
        </Pressable>
      </View>
      <View>
        <Image
          source={require('../../../assets/images/product-images/sofa3.png')}
          style={{
            width: wp('40%'),
            height: hp('14%'),
            // borderWidth: 1,
            // borderColor: 'black',
          }}
        />
      </View>
    </Pressable>
  );
}
