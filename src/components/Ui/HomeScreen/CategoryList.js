import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CategoryList() {
  const categories = [
    {
      id: '1',
      title: 'Tables',
      image: require('../../../assets/images/category-images/newtable.png'),
      color: '#e4f3ea',
    },
    {
      id: '2',
      title: 'Chair',
      image: require('../../../assets/images/category-images/chair.png'),
      color: '#ffece8',
    },
    {
      id: '3',
      title: 'Wardrobe',
      image: require('../../../assets/images/category-images/wardrobe.png'),
      color: '#fff6e4',
    },
    {
      id: '4',
      title: 'Beds',
      image: require('../../../assets/images/category-images/bed.png'),
      color: '#f1edfc',
    },
    {
      id: '5',
      title: 'Sofa',
      image: require('../../../assets/images/category-images/newsofa.png'),
      color: '#e4f3ea',
    },
    {
      id: '6',
      title: 'Lamps',
      image: require('../../../assets/images/category-images/lamp.png'),
      color: '#d4f1f9',
    },
    {
      id: '7',
      title: 'Bookshelf',
      image: require('../../../assets/images/category-images/bookshelf.png'),
      color: '#fde8d7',
    },
  ];

  const renderItem = ({item}) => (
    <View className="ml-[10px] space-y-1 text-center">
      <View
        className="rounded-lg flex items-center justify-center text-center"
        style={[
          {height: hp('6.2%'), width: wp('14.4%')},
          {backgroundColor: item.color},
        ]}>
        <Image
          source={item.image}
          className=""
          style={{width: wp('8.2%'), height: hp('3.5%')}}
        />
      </View>
      <Text
        className="text-center text-gray-600 font-medium"
        style={{fontSize: hp('1.5%')}}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      className="ml-1"
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}
