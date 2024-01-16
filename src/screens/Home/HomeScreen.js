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
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/Ui/HomeScreen/SearchBar';
import Banner from '../../components/Ui/HomeScreen/Banner';
import CategoryList from '../../components/Ui/HomeScreen/CategoryList';
import ProductCard from '../../components/Ui/HomeScreen/ProductCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen() {
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
        <View style={{flexGrow: 1}} className="px-1">
          <View className="px-3">
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate('SearchProduct')}
              className="bg-[#fafafa] flex flex-row items-center justify-between rounded-[10px] py-3 px-3 my-2">
              <Text className="text-gray-400" style={{fontSize: hp('1.9%')}}>
                Search Product Name
              </Text>
              <Ionicons name={'search'} size={22} color="#777" />
            </TouchableOpacity>
            <Banner />
            <View className="my-4 flex flex-row items-center justify-between">
              <Text
                className="text-gray-700 font-medium"
                style={{fontSize: hp('2.2%')}}>
                Categories
              </Text>
              <Pressable onPress={() => navigation.navigate('Categories')}>
                <Text
                  className="text-blue-500 font-medium"
                  style={{fontSize: hp('1.9%')}}>
                  See All
                </Text>
              </Pressable>
            </View>
          </View>
          <CategoryList />
        </View>
        <View className="space-y-2 py-2 mt-3 px-2 bg-[#f5f5f5] rounded-t-3xl">
          <View className="mt-2 px-2 flex flex-row items-center justify-between">
            <Text
              className="text-gray-700 font-medium"
              style={{fontSize: hp('2.2%')}}>
              Featured Product
            </Text>
            <Pressable onPress={() => navigation.navigate('FeaturedProducts')}>
              <Text
                className="text-blue-500 font-medium"
                style={{fontSize: hp('1.9%')}}>
                See All
              </Text>
            </Pressable>
          </View>
          <View>
            <ProductCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
