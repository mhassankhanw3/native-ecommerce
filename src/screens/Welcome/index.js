import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button/Button';

export default function Welcome() {
  return (
    <Layout>
      <View style={{flexGrow: 1}}>
        <View className="flex-1 items-center justify-center">
          <Text
            className="text-gray-800 font-bold text-center"
            style={{fontSize: hp('2.5%')}}>
            Wecome To Our 👋
          </Text>
          <Text
            className="text-gray-800 font-bold text-center"
            style={{fontSize: hp('2.9%')}}>
            E-ceommerce Store
          </Text>
        </View>
      </View>
      <View className="my-1">
        <Button title={'Profile'} navigate={'ProfileStack'} />
      </View>
      <View className="my-1">
        <Button title={'Sign In'} navigate={'AuthStack'} />
      </View>
    </Layout>
  );
}
