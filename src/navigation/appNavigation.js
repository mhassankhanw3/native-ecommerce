import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/Home/HomeScreen';
import Categories from '../screens/Home/AllCategories';
import Order from '../screens/Order/MyOrder';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';

import AddShippingAddress from '../screens/Shipping/AddShippingAddress';
import ResetPassword from '../screens/Auth/ResetPassword';
import EmailVerification from '../screens/Auth/EmailVerification';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Image
      style={{width: wp('16%'), height: hp('6%')}}
      source={require('../assets/images/logos/ecommercelogo.png')}
    />
  );
}

const HomeStack = () => (
  <Stack.Navigator
    // initialRouteName="HomeScreen"
    screenOptions={{
      contentStyle: {
        backgroundColor: '#FFFFFF',
      },
    }}>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerTitle: props => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginRight: 20,
              // borderWidth: 1,
              // borderColor: 'black',
            }}>
            <LogoTitle {...props} />
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <MaterialIcons name={'local-shipping'} size={24} color="#52525b" />
          </TouchableOpacity>
        ),
      }}
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
    // initialRouteName="MyOrder"
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
    // initialRouteName="SignIn"
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
    <Stack.Screen
      name="ResetPassword"
      component={ResetPassword}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="EmailVerification"
      component={EmailVerification}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const TabScreens = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    swipeEnabled={true}
    animationEnabled={true}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'HomeStack') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'OrderStack') {
          iconName = focused ? 'cart' : 'cart-outline';
        } else if (route.name === 'AuthStack') {
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
      tabBarStyle: {
        backgroundColor: 'white',
        height: 62,
        borderTopWidth: 1,
        borderTopColor: '#d4d4d4',
        paddingBottom: 6,
        paddingTop: 6,
      },
    })}>
    <Tab.Screen
      name="HomeStack"
      component={HomeStack}
      options={({route}) => ({
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'Home',
      })}
    />
    <Tab.Screen
      name="Categories"
      component={Categories}
      options={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'Categories',
      }}
    />
    <Tab.Screen
      name="OrderStack"
      component={OrderStack}
      options={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'Order',
      }}
    />
    <Tab.Screen
      name="AuthStack"
      component={AuthStack}
      options={{
        headerShown: false,
        animation: 'slide_from_right',
        tabBarLabel: 'SignIn',
      }}
    />
  </Tab.Navigator>
);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="TabScreens"
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
