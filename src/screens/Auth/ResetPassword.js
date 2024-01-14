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

export default function ResetPassword() {
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
              title={'Reset Password'}
              desc={
                'Enter your email that we will send password changing email'
              }
            />
            <View>
              <CustomInput
                label={'Email / Phone'}
                placeholder={'Gordon50app@gmail.com'}
                value={email}
                onChangeText={setEmail}
              />
              <Button title="Reset" navigate={'EmailVerification'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
