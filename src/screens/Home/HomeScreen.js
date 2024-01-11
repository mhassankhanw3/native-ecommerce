import {View, Text} from 'react-native';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import PasswordInput from '../../components/Ui/Input';
import HeadingTxt from '../../components/Ui/HeadingTxt';

export default function HomeScreen() {
  return (
    <Layout>
      <HeadingTxt
        title={'Create An Account'}
        desc={'Enter the given details to create an account'}
      />
      <Button />
      <PasswordInput />
    </Layout>
  );
}
