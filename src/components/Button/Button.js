import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Button() {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-[#3669c9] max-w-full w-full mx-auto flex items-center justify-center rounded-[10px] py-3.5 shadow-xl shadow-gray-700">
      <Text className="text-[#eaeff9] font-medium" style={{fontSize: hp('2%')}}>
        Login
      </Text>
    </TouchableOpacity>
  );
}
