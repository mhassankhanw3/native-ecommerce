import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';
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

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxClick = () => {
    setChecked(!isChecked);
  };

  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}} className="pt-10">
          {/* <BackBtn /> */}
          <View className="p-1 flex flex-row items-center space-x-2">
            <Image
              source={require('../../assets/images/logos/ecommercelogo.png')}
              style={{
                width: hp('11%'),
                height: hp('11%'),
                // borderWidth: 1,
                // borderColor: 'black',
              }}
            />
            <View className="flex flex-col items-start justify-center">
              <Text
                className="text-gray-800 font-medium"
                style={{fontSize: hp('2%')}}>
                E-commerce
              </Text>
              <Text
                className="text-gray-800 font-bold"
                style={{fontSize: hp('2.1%')}}>
                Store
              </Text>
            </View>
          </View>
          <View className="px-2 mt-6 w-full">
            <Text
              className="text-gray-800 font-bold"
              style={{fontSize: hp('2.8%')}}>
              Hi, Welcome Back! 👋
            </Text>
            <KeyboardAvoidingView behavior="position">
              <View className="mt-10">
                <CustomInput
                  label={'Email'}
                  placeholder={'example@gmail.com'}
                  value={email}
                  onChangeText={setEmail}
                />

                <View className="flex flex-col mb-2">
                  <Text
                    className="text-[#152238] font-normal"
                    style={{fontSize: hp('1.9%')}}>
                    Password
                  </Text>
                  <PasswordInput
                    placeholder={'Enter Your Passowrd'}
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>
                <View className="mb-4 flex flex-row items-center justify-between">
                  <CheckBox
                    className=""
                    style={{flex: 1}}
                    onClick={handleCheckBoxClick}
                    isChecked={isChecked}
                    // leftText={'CheckBox'}
                    rightTextStyle={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#4b5563',
                    }}
                    rightText="Remember Me"
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    className="flex-row justify-end mr-2"
                    onPress={() => navigation?.navigate('ResetPassword')}>
                    <Text
                      className="text-red-400 font-medium"
                      style={{fontSize: hp('1.8%')}}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>

            <View className="flex flex-col items-center justify-center space-y-2">
              <Button title="Login" navigate={'HomeStack'} />
              <View className="mx-2 flex flex-row items-center">
                <Text className="text-gray-500" style={{fontSize: hp('1.9%')}}>
                  Don't have an account?{' '}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation?.navigate('SignUp')}>
                  <Text className="text-blue-500" style={{fontSize: hp('2%')}}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
