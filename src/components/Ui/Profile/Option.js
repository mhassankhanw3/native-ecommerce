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
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../Button/Button';
import {useNavigation} from '@react-navigation/native';

export default function Option({navigate, title}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigate ? navigation?.navigate(navigate && navigate) : '';
      }}
      className="bg-white my-[4px] rounded-lg flex flex-row items-center justify-between py-5 px-4 border-[1px] border-gray-100 shadow-xl shadow-gray-200 w-full">
      <Text className="text-gray-800 font-medium" style={{fontSize: hp('2%')}}>
        {title}
      </Text>
      <TouchableOpacity
        underlayColor={`${'#e5e7eb'}`}
        className={'bg-transparent rounded-full'}
        onPress={() => {
          navigation.navigate(navigate);
        }}>
        <Icon
          name={'chevron-forward-outline'}
          size={22}
          color={`${'#374151'}`}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
