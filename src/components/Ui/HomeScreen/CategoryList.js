import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

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
  ];

  const renderItem = ({item}) => (
    <View>
      <View style={[styles.categoryItem, {backgroundColor: item.color}]}>
        <Image source={item.image} style={styles.categoryImage} />
      </View>
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    width: 50,
    height: 50,
    borderRadius: 10,
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
