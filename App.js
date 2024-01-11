import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppNavigation from './src/navigation/appNavigation';

function App() {
  return <AppNavigation />;
}

export default App;
