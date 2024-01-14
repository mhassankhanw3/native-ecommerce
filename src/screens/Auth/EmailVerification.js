import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
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
export default function EmailVerification() {
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
          <View className="mt-10 space-y-20">
            <HeadingTxt
              title={'Verification'}
              desc={
                'We send you a confirmation on Gor*******@gmail.com Wrong email?'
              }
            />
            <View className="flex items-center justify-center">
              <Image
                source={require('../../assets/images/logos/email-verify.png')}
                style={{
                  width: wp('54%'),
                  height: hp('24%'),
                  marginTop: -50,
                  marginBottom: -100,
                }}
              />
            </View>
            <View>
              <CustomInput
                // label={'Email / Phone'}
                placeholder={'Retry for new confirmation'}
                value={email}
                onChangeText={setEmail}
              />
              <Button title="Continue" />
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
