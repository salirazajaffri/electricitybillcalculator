import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
const Billing = () => {
  const {goBack} = useNavigation();
  return (
    <>
      <Header callback={goBack} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Billings</Text>
      </View>
    </>
  );
};

export default Billing;
