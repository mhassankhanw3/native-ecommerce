import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="bg-[#fafafa] flex flex-row items-center rounded-[10px] py-1 my-2">
      <TextInput
        className="flex-1 h-10 px-4"
        style={{fontSize: hp('2%')}}
        placeholder="Password"
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} className="p-3">
        <Ionicons
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color="#777"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
