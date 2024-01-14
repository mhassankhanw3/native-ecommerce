import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function SearchBar({lable, placeholder, value, onChangeText}) {
  const SearchProduct = () => {
    console.log('search product');
  };
  return (
    <View className="bg-[#fafafa] flex flex-row items-center rounded-[10px] py-1 my-2">
      <TextInput
        className="flex-1 h-10 px-4"
        style={{fontSize: hp('2%')}}
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
      <TouchableOpacity onPress={SearchProduct} className="p-3">
        <Ionicons name={'search'} size={24} color="#777" />
      </TouchableOpacity>
    </View>
  );
}
