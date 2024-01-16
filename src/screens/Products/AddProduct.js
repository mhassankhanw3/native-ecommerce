import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  Pressable,
  StatusBar,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ImagePicker, launchImageLibrary} from 'react-native-image-picker';

import Layout from '../../components/Layout/Layout';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/Ui/TextFields/CustomInput';
import Option from '../../components/Ui/Profile/Option';

export default function AddProduct() {
  const backgroundColor = '#e8e8e8';
  const textColor = 'dark-content';
  const navigation = useNavigation();
  const [area, setarea] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [photoURL, setPhotoURL] = useState('');

  const handleChooseImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    await launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setPhotoURL(imageUri);
        console.log(imageUri, 'imageUri');
      }
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={photoURL ? 'white' : textColor}
        translucent
        backgroundColor="transparent"
      />
      <View className="h-full" style={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>
          {photoURL && (
            <Image
              source={{uri: photoURL}}
              style={{flex: 1, resizeMode: 'cover'}}
              className="z-10 w-full h-full"
            />
          )}
          <TouchableOpacity
            underlayColor={`${'#93c5fd'}`}
            className={
              'bg-blue-500 p-2 z-50 rounded-full absolute left-4 top-8 flex items-center justify-center'
            }
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              name={'chevron-back-outline'}
              size={22}
              color={`${'#f8fafc'}`}
            />
          </TouchableOpacity>
          {!photoURL && (
            <View className="flex-1">
              <TouchableOpacity
                onPress={handleChooseImage}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Feather name={'upload'} size={26} color={`${'#1f2937'}`} />
                <Text
                  className="text-gray-800 font-medium my-2"
                  style={{fontSize: hp('2.5%')}}>
                  Add Image
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View className="bg-white p-3 rounded-t-3xl h-[50%]">
          <View className="flex flex-col mb-2">
            <TextInput
              className="bg-transparent border-gray-200 border-[1px] h-14 px-4 rounded-2xl flex items-center justify-center py-2 my-1"
              style={{fontSize: hp('1.8%')}}
              Editable
              placeholder={'Name'}
            />
          </View>
          <View className="flex flex-col mb-2">
            <View className="bg-transparent border-gray-200 border-[1px] h-52 rounded-2xl my-1">
              <TextInput
                multiline={true}
                numberOfLines={6}
                className={`bg-transparent h-14 max-h-52 px-4 text-start rounded-2xl py-2`}
                style={{justifyContent: 'flex-start', fontSize: hp('1.8%')}}
                placeholder={'Description'}
                value={area}
                onChangeText={text => setarea(text)}
              />
            </View>
          </View>
          <View>
            <Button title={'Submit'} navigate={'HeaderTabs'} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
});
