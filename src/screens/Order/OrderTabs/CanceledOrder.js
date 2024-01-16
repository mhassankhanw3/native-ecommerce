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
import {SelectList} from 'react-native-dropdown-select-list';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Layout from '../../../components/Layout/Layout';
export default function CanceledOrder() {
  return (
    <Layout>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          <View className="mt-4 bg-white border-[1px] border-gray-200 shadow-sm py-5 rounded-xl w-full">
            <View className="flex flex-row items-center justify-between px-4">
              <Text
                className="text-gray-800 font-bold"
                style={{fontSize: hp('2%')}}>
                Order No238562312
              </Text>
              <Text
                className="text-neutral-400 font-medium"
                style={{fontSize: hp('2%')}}>
                20/03/2020
              </Text>
            </View>
            <View className="h-[1.8px] w-full bg-gray-200 my-4"></View>
            <View className="flex flex-row items-center justify-between px-4">
              <View className="flex flex-row items-center space-x-1">
                <Text
                  className="font-bold text-gray-400"
                  style={{fontSize: hp('2%')}}>
                  Quantity:
                </Text>
                <Text
                  className="font-bold text-gray-800"
                  style={{fontSize: hp('2%')}}>
                  03
                </Text>
              </View>
              <View className="flex flex-row items-center space-x-1">
                <Text
                  className="font-bold text-gray-400"
                  style={{fontSize: hp('2%')}}>
                  Total Amount:
                </Text>
                <Text
                  className="font-bold text-gray-800"
                  style={{fontSize: hp('2%')}}>
                  $150
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center justify-between px-4 mt-6">
              <TouchableOpacity
                activeOpacity={0.8}
                className="flex flex-row items-center bg-blue-500 py-2 px-4 rounded-md">
                <Text
                  className="font-medium text-gray-50"
                  style={{fontSize: hp('2%')}}>
                  Details
                </Text>
              </TouchableOpacity>
              <View className="flex flex-row items-center">
                <Text
                  className="font-bold text-red-500"
                  style={{fontSize: hp('2%')}}>
                  Canceled
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
