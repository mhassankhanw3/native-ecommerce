import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {View} from 'react-native';

const TabIcon = ({focused, name, isSearch, isFeather}) => {
  // Define the default and focused icon colors
  const defaultColor = '#9ca3af';
  const focusedColor = '#030712';

  const iconSize = focused ? 30 : 26;

  const iconColor = focused ? focusedColor : defaultColor;

  return (
    <>
      {isSearch ? (
        <Ionicons name={name} size={iconSize} color={iconColor} />
      ) : isFeather ? (
        <Feather name={name} size={iconSize} color={iconColor} />
      ) : (
        <Icon name={name} size={iconSize} color={iconColor} />
      )}
    </>
  );
};

export default TabIcon;
