import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
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
import SearchProduct from '../screens/Home/SearchProducts';
import FeaturedProducts from '../screens/Home/FeaturedProducts';
import DetailProduct from '../screens/Home/DetailProduct';
import AddToCart from '../screens/Order/Cart';
import EnterPaymentDetail from '../screens/Home/EnterPaymentDetail';
import Welcome from '../screens/Welcome';
import Profile from '../screens/Profile/Profile';
import EditProfile from '../screens/Profile/EditProfile';
import CustomProducts from '../screens/Products/CustomProducts';
import AddProduct from '../screens/Products/AddProduct';

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
    initialRouteName="HomeScreen"
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
    <Stack.Screen
      name="SearchProduct"
      component={SearchProduct}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const OrderStack = () => {
  return (
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
      <Stack.Screen
        name="AddToCart"
        component={AddToCart}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProductsStack = () => {
  return (
    <Stack.Navigator
      // initialRouteName="CustomProducts"
      screenOptions={{
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Stack.Screen
        name="CustomProducts"
        component={CustomProducts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="AddShippingAddress"
        component={AddShippingAddress}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

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

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabScreens = () => {
  return (
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
          } else if (route.name === 'WelcomeStack') {
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
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          tabBarLabel: 'Categories',
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={({route}) => ({
          headerShown: false,
          tabBarLabel: 'Order',
        })}
      />
      <Tab.Screen
        name="WelcomeStack"
        component={WelcomeStack}
        options={{
          headerShown: false,
          // animation: 'slide_from_right',
          tabBarLabel: 'SignIn',
        }}
      />
    </Tab.Navigator>
  );
};

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
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FeaturedProducts"
          component={FeaturedProducts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EnterPaymentDetail"
          component={EnterPaymentDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsStack"
          component={ProductsStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
