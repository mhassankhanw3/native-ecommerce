import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HeadingTxt({title, desc}) {
  return (
    <View>
      <Text
        className="text-[#0c1a30] font-bold mb-2"
        style={{fontSize: hp('2.4%')}}>
        {title}
      </Text>
      <Text
        className="text-[#838589] font-normal "
        style={{fontSize: hp('2%')}}>
        {desc}
      </Text>
    </View>
  );
}
