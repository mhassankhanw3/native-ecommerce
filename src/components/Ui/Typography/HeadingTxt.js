import {View, Text} from 'react-native';
import React from 'react';

export default function HeadingTxt({title, desc}) {
  return (
    <View>
      <Text className="text-[#0c1a30] font-bold text-[24px] mb-5 ">{title}</Text>
      <Text className="text-[#838589] font-normal text-[16px] ">{desc}</Text>
    </View>
  );
}
