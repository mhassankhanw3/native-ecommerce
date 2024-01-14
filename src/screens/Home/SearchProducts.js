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
import {useNavigation} from '@react-navigation/native';
import Layout from '../../components/Layout/Layout';
import BackBtn from '../../components/Button/BackBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../components/Ui/HomeScreen/SearchBar';

export default function SearchProduct() {
  const [searchProduct, setSearchProduct] = useState('');

  const navigation = useNavigation();
  const backgroundColor = 'white';
  const textColor = 'dark-content';
  return (
    <View className="bg-white">
      <StatusBar barStyle={textColor} backgroundColor={backgroundColor} />
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        className="h-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          <View className="flex flex-row items-center justify-between w-full border-b border-gray-300 mt-2 pb-4 px-3">
            <View className="flex flex-row items-center justify-between w-[58%]">
              <TouchableOpacity
                underlayColor={`${'#e5e7eb'}`}
                className={'bg-transparent rounded-full'}
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name={'chevron-back'} size={24} color={`${'#374151'}`} />
              </TouchableOpacity>
              <Text
                className="text-gray-700 text-center font-medium"
                style={{fontSize: hp('2.2%')}}>
                Search
              </Text>
            </View>
            {/* <Ionicons name={'search'} size={24} color="#374151" /> */}
          </View>
          <View className="px-3">
            <SearchBar
              placeholder={'Search Product Name'}
              value={searchProduct}
              onChangeText={setSearchProduct}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

SearchProduct.navigationOptions = {
  tabBarVisible: false,
};
