import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function InputEmail({
  label,
  placeholder,
  value,
  onChangeText,
  phone,
}) {
  const [email, setEmail] = useState('');

  return (
    <View className="flex flex-col mb-2">
      <Text
        className="text-[#152238] text-[16px] font-normal "
        style={{fontSize: hp('1.9%')}}>
        {label}
      </Text>
      <TextInput
        className="bg-[#fafafa] px-4 rounded-[10px] flex items-center justify-center py-2 my-1"
        style={{fontSize: hp('1.9%'), height: hp('7%')}}
        Editable
        keyboardType={phone && 'number-pad'}
        autoCapitalize="none"
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
}
