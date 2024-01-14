import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import React, {useState, useRef} from 'react';
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
import SearchBar from '../../components/Ui/HomeScreen/SearchBar';
import Banner from '../../components/Ui/HomeScreen/Banner';
import CategoryList from '../../components/Ui/HomeScreen/CategoryList';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [searchProduct, setSearchProduct] = useState('');

  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}} className="px-1">
          <SearchBar
            placeholder={'Search Product Name'}
            value={searchProduct}
            onChangeText={setSearchProduct}
          />
          <Banner />
          <View className="my-4 flex flex-row items-center justify-between">
            <Text
              className="text-gray-700 font-medium"
              style={{fontSize: hp('2.5%')}}>
              Categories
            </Text>
            <Pressable>
              <Text
                className="text-blue-500 font-medium"
                style={{fontSize: hp('2%')}}>
                See All
              </Text>
            </Pressable>
          </View>

          <CategoryList />
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
