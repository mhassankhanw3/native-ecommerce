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
import Layout from '../../components/Layout/Layout';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/Ui/TextFields/CustomInput';
import Option from '../../components/Ui/Profile/Option';

export default function AddShippingAddress() {
  const [selected, setSelected] = React.useState('');
  const backgroundColor = 'white';
  const textColor = 'dark-content';
  const navigation = useNavigation();

  const data = [
    {key: '1', value: 'Afghanistan'},
    {key: '2', value: 'Albania'},
    {key: '3', value: 'Algeria'},
    {key: '4', value: 'Andorra'},
    {key: '5', value: 'Angola'},
    {key: '6', value: 'Antigua and Barbuda'},
    {key: '7', value: 'Argentina'},
    {key: '8', value: 'Armenia'},
    {key: '9', value: 'Australia'},
    {key: '10', value: 'Austria'},
    {key: '11', value: 'Azerbaijan'},
    {key: '12', value: 'Bahamas'},
    {key: '13', value: 'Bahrain'},
    {key: '14', value: 'Bangladesh'},
    {key: '15', value: 'Barbados'},
    {key: '16', value: 'Belarus'},
    {key: '17', value: 'Belgium'},
    {key: '18', value: 'Belize'},
    {key: '19', value: 'Benin'},
    {key: '20', value: 'Bhutan'},
  ];

  return (
    <View className="bg-white">
      <StatusBar
        barStyle={textColor}
        backgroundColor={backgroundColor}
        translucent={false}
      />
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
              Add shipping address
            </Text>
          </View>
          <View className="px-5 mx-auto w-full">
            <View className="mt-4">
              <CustomInput label={'Full Name'} placeholder={'Hassan khan'} />
              <CustomInput
                label={'Address'}
                placeholder={'Ex: 25 Robert Latouche Street'}
              />
              <CustomInput
                label={'Email'}
                placeholder={'mhassankhanmv@gmail.com'}
              />
              <CustomInput
                label={'Zipcode (Postal Code)'}
                placeholder={'Ex: 25 Robert Latouche Street'}
              />
              <View className="mb-2">
                <Text className="text-[#152238] text-[16px] font-normal my-1">
                  Country
                </Text>
                <SelectList
                  setSelected={val => setSelected(val)}
                  data={data}
                  save="value"
                  label="Categories"
                  placeholder="Select Country"
                  defaultOption={'Pakistan'}
                  dropdownStyles={{
                    backgroundColor: '#fafafa',
                  }}
                />
              </View>
              <CustomInput label={'Company Name'} placeholder={'Solo dev'} />
              <CustomInput
                label={'Phone Number'}
                placeholder={'+92 3331268198'}
                phone={true}
              />
            </View>
          </View>
        </View>
        <View className="px-5 pb-4">
          <Button title={'Save address'} />
        </View>
      </ScrollView>
    </View>
  );
}
