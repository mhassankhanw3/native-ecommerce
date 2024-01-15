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
import Layout from '../../components/Layout/Layout';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

export default function EnterPaymentDetail() {
  const navigation = useNavigation();
  return (
    <View className="bg-white">
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          <View className="bg-white flex flex-row items-center justify-center w-full border-b-[1px] border-gray-200 mt-2 pb-4">
            <TouchableOpacity
              underlayColor={`${'#e5e7eb'}`}
              className={'bg-transparent rounded-full absolute left-3 bottom-3'}
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={24} color={`${'#374151'}`} />
            </TouchableOpacity>
            <Text
              className="text-gray-700 text-center font-medium"
              style={{fontSize: hp('2.2%')}}>
              Enter Payment detail
            </Text>
          </View>

          <View className="px-6 mt-4">
            <View className="flex flex-row items-center justify-between my-2">
              <Text
                className="text-gray-500 font-medium"
                style={{fontSize: hp('2.4%')}}>
                Total:
              </Text>
              <Text
                className="text-gray-700 font-medium"
                style={{fontSize: hp('2.2%')}}>
                $ 95.00
              </Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text
                className="text-gray-500 font-medium"
                style={{fontSize: hp('2.4%')}}>
                Advance payment
              </Text>
              <Text
                className="text-gray-700 font-medium"
                style={{fontSize: hp('2.2%')}}>
                $ 45.00
              </Text>
            </View>
            <View className="my-4">
              <Text
                className="text-blue-500 font-bold"
                style={{fontSize: hp('3.0%')}}>
                Total CBM of container
              </Text>
            </View>
            <View className="flex flex-row items-center justify-center">
              <View
                className="bg-red-500 flex items-center justify-center"
                style={{width: wp('30%'), height: hp('6%')}}>
                <Text
                  className="text-gray-100 font-medium"
                  style={{fontSize: hp('2.2%')}}>
                  38%
                </Text>
              </View>
              <View
                className="bg-blue-500 flex items-center justify-center"
                style={{width: wp('25%'), height: hp('6%')}}>
                <Text
                  className="text-gray-100 font-medium"
                  style={{fontSize: hp('2.2%')}}>
                  29%
                </Text>
              </View>
              <View
                className="bg-gray-200 flex items-center justify-center"
                style={{width: wp('20%'), height: hp('6%')}}>
                <Text
                  className="text-gray-700 font-medium"
                  style={{fontSize: hp('2.2%')}}>
                  20%
                </Text>
              </View>
            </View>

            <View className="flex flex-row items-center justify-center space-x-4 mt-6">
              <View className="flex flex-col items-center justify-center">
                <View
                  className="bg-red-500 rounded-md"
                  style={{width: wp('6%'), height: hp('3%')}}></View>
                <Text
                  className="text-gray-700 text-center"
                  style={{fontSize: hp('1.6%')}}>
                  Taken space
                </Text>
              </View>
              <View className="flex flex-col items-center justify-center">
                <View
                  className="bg-blue-500 rounded-md"
                  style={{width: wp('6%'), height: hp('3%')}}></View>
                <Text
                  className="text-gray-700 text-center"
                  style={{fontSize: hp('1.6%')}}>
                  Your Space
                </Text>
              </View>
              <View className="flex flex-col items-center justify-center">
                <View
                  className="bg-gray-200 rounded-md"
                  style={{width: wp('6%'), height: hp('3%')}}></View>
                <Text
                  className="text-gray-700 text-center"
                  style={{fontSize: hp('1.6%')}}>
                  Empty Space
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="px-4 pb-4">
          <Button title={'Confirm 50% advance payment'} />
        </View>
      </ScrollView>
    </View>
  );
}
