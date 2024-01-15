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
import Option from '../../components/Ui/Profile/Option';

export default function Profile() {
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
              className={
                'bg-transparent rounded-full absolute right-3 bottom-3'
              }
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'log-out-outline'} size={24} color={`${'#374151'}`} />
            </TouchableOpacity>
            <Text
              className="text-gray-700 text-center font-medium"
              style={{fontSize: hp('2.2%')}}>
              Profile
            </Text>
          </View>
          <View className="px-4 mt-10">
            <View className="flex flex-row items-center justify-start space-x-4">
              <Image
                className="rounded-full"
                source={require('../../assets/images/user-avatars/avatar.png')}
                style={{
                  width: hp('11.5%'),
                  height: hp('11.5%'),
                  // borderWidth: 1,
                  // borderColor: 'black',
                }}
              />
              <View className="flex flex-col items-start">
                <Text
                  className="text-gray-800 font-bold"
                  style={{fontSize: hp('3%')}}>
                  Hassan Khan
                </Text>
                <Text className="text-gray-500" style={{fontSize: hp('2%')}}>
                  mhassankhanmv@gmail.com
                </Text>
              </View>
            </View>
            <View className="mt-6">
              <Option title={'Profile'} navigate={'EditProfile'} />
              <Option title={'Custom Product'} navigate={'ProductsStack'} />
              <Option title={'Support'} />
              <Option title={'Order Tracking'} />
              <Option title={'Add shipping address'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
