import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const Layout = ({children}) => {
  const backgroundColor = 'white';
  const textColor = 'dark-content';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={textColor} backgroundColor={backgroundColor} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 10,
  },
});

export default Layout;
