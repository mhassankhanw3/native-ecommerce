import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function Button({title, navigate}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate && navigation.navigate(navigate)}
      className="bg-[#3669c9] max-w-full w-full mx-auto flex items-center justify-center rounded-[10px] shadow-md shadow-gray-700"
      style={{paddingVertical: hp('1.8%')}}>
      <Text
        className="text-[#eaeff9] font-medium"
        style={{fontSize: hp('1.9%')}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
