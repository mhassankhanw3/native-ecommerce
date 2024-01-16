import {View, Text, Pressable, TouchableHighlight} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const transparent = 'rgba(0,0,0,0.5)';
export default function BackBtn({title, navigate}) {
  const navigation = useNavigation();
  return (
    <View className="relative mt-2">
      <View className="">
        <TouchableHighlight
          underlayColor={`${'#e5e7eb'}`}
          className={'bg-transparent absolute -left-1 z-10 rounded-full'}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name={'chevron-back-outline'}
            size={24}
            color={`${'#0c1a30'}`}
          />
        </TouchableHighlight>
      </View>
      {title ? (
        <Text className={`${'text-gray-600'} text-xl font-medium text-center`}>
          {title}
        </Text>
      ) : (
        <View className="flex flex-col items-center justify-center">
          <Text className="text-gray-700 text-[24px] font-bold">{''}</Text>
          <Text className="text-xs">{''}</Text>
        </View>
      )}
    </View>
  );
}
