import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function InputEmail({label, placeholder, value, onChangeText}) {
  const [email, setEmail] = useState('');

  return (
    <View className="flex flex-col mb-2">
      <Text className="text-[#152238] text-[16px] font-normal">{label}</Text>
      <TextInput
        className="bg-[#fafafa] h-14 px-4 rounded-[10px] flex items-center justify-center py-2 my-1"
        style={{fontSize: hp('2%')}}
        Editable
        autoCapitalize="none"
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
}
