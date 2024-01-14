import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import PasswordInput from '../../components/Ui/TextFields/PasswordInput';
import HeadingTxt from '../../components/Ui/Typography/HeadingTxt';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomInput from '../../components/Ui/TextFields/CustomInput';
import BackBtn from '../../components/Button/BackBtn';
import {useNavigation} from '@react-navigation/native';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();
  return (
    <Layout>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}} className="px-1">
          <BackBtn />
          <View className="mt-10">
            <HeadingTxt
              title={'Create An Account'}
              desc={'Enter the given details to create an account.'}
            />
          </View>
          <KeyboardAvoidingView behavior="position">
            <View className="mt-6">
              <CustomInput
                label={'Enter Your Email'}
                placeholder={'example@gmail.com'}
                value={email}
                onChangeText={setEmail}
              />
              <CustomInput
                label={'User Name'}
                placeholder={'Gordon'}
                value={userName}
                onChangeText={setUserName}
              />
              <View className="flex flex-col mb-2">
                <Text className="text-[#152238] text-[16px] font-normal ">
                  Password
                </Text>
                <PasswordInput
                  placeholder={'Passowrd'}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <View className="flex flex-col mb-2">
                <Text className="text-[#152238] text-[16px] font-normal ">
                  Confirm Password
                </Text>
                <PasswordInput
                  placeholder={'Confirm Passowrd'}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
        <View className="flex flex-col items-center justify-center space-y-2 mb-2">
          <Button title="Confirmation" />
          <View className="mx-2 flex flex-row items-center">
            <Text className="text-gray-500" style={{fontSize: hp('2.2%')}}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('AuthStack')}>
              <Text className="text-blue-500" style={{fontSize: hp('2.3%')}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
