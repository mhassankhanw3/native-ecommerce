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
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/Ui/TextFields/CustomInput';
import Option from '../../components/Ui/Profile/Option';

export default function EditProfile() {
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
              <Icon
                name={'chevron-back-outline'}
                size={24}
                color={`${'#374151'}`}
              />
            </TouchableOpacity>
            <Text
              className="text-gray-700 text-center font-medium"
              style={{fontSize: hp('2.2%')}}>
              Profile
            </Text>
          </View>

          <View className="mt-4 px-5 mx-auto w-full">
            <View
              className="mx-auto rounded-full relative flex items-center justify-center"
              style={{
                width: hp('15%'),
                height: hp('15%'),
                // borderWidth: 1,
                // borderColor: 'black',
              }}>
              <Image
                className="rounded-full mx-auto "
                source={require('../../assets/images/user-avatars/avatar.png')}
                style={{
                  width: hp('15%'),
                  height: hp('15%'),
                  // borderWidth: 1,
                  // borderColor: 'black',
                }}
              />
              <TouchableOpacity
                underlayColor={`${'#e5e7eb'}`}
                className={
                  'bg-blue-500 p-[8px] rounded-full absolute right-0 bottom-2 flex items-center justify-center'
                }
                onPress={() => {
                  navigation.goBack();
                }}>
                <Feather name={'edit'} size={20} color={`${'#f1f5f9'}`} />
              </TouchableOpacity>
            </View>
            <View className="mt-8">
              <CustomInput label={'Full Name'} placeholder={'Hassan khan'} />
              <CustomInput
                label={'Email'}
                placeholder={'mhassankhanmv@gmail.com'}
              />
            </View>
          </View>
        </View>
        <View className="px-5 pb-4">
          <Button title={'Update'} />
        </View>
      </ScrollView>
    </View>
  );
}
