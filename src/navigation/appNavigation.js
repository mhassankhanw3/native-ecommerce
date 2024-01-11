import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/Home/HomeScreen';
import Categories from '../screens/Home/AllCategories';
import Order from '../screens/Order/MyOrder';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

import TabIcon from '../components/Icon/TabIcon';
import AddShippingAddress from '../screens/Shipping/AddShippingAddress';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      contentStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Categories"
      component={Categories}
      options={{headerShown: false}}
    />
    {/* Add more screens related to Home here */}
  </Stack.Navigator>
);

const OrderStack = () => (
  <Stack.Navigator
    initialRouteName="MyOrder"
    screenOptions={{
      contentStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}>
    <Stack.Screen
      name="MyOrder"
      component={Order}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ShippingAddress"
      component={AddShippingAddress}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      contentStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const TabScreens = () => (
  <Tab.Navigator
    initialRouteName="Home"
    swipeEnabled={true}
    animationEnabled={true}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Order') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'SignIn') {
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarLabelStyle: {
        fontSize: 14,
        fontWeight: 500,
      },
      tabBarActiveTintColor: '#3669c9',
      tabBarInactiveTintColor: '#737373',
      tabBarHideOnKeyboard: Platform.OS !== 'ios',
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        backgroundColor: 'white', // Set the background color
        // paddingBottom: 4,
        height: 62,
        borderTopWidth: 1,
        borderTopColor: '#d4d4d4',
        paddingBottom: 6,
        paddingTop: 6,
      },
    })}>
    <Tab.Screen
      name="Home"
      options={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'Home',
      }}
      component={HomeStack}
    />
    <Tab.Screen
      name="Categories"
      options={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'Categories',
      }}
      component={Categories}
    />
    <Tab.Screen
      name="Order"
      options={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'Order',
      }}
      component={OrderStack}
    />
    <Tab.Screen
      name="SignIn"
      options={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'SignIn',
      }}
      component={AuthStack}
    />
  </Tab.Navigator>
);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabScreens"
        screenOptions={{
          contentStyle: {
            backgroundColor: '#FFFFFF',
          },
        }}>
        <Stack.Screen
          name="TabScreens"
          component={TabScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
