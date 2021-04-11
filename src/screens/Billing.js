import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Header from '../components/Header';
const Billing = ({slabs}) => {
  const {goBack} = useNavigation();
  const [reading, setReading] = useState('');
  return (
    <>
      <Header callback={goBack} />
      <Text>{JSON.stringify(slabs)}</Text>
      <View>
        <TextInput
          mode="outlined"
          value={reading}
          onChangeText={setReading}
          keyboardType="number-pad"
          label="Enter Reading"
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 36,
            alignItems: 'center',
          }}
          onPress={() => {
            console.log(reading);
          }}>
          <Text
            style={{
              fontSize: 14,
              backgroundColor: 'crimson',
              paddingVertical: 8,
              paddingHorizontal: 15,
              color: '#FFF',
              borderRadius: 50,
            }}>
            Calculate
          </Text>
        </TouchableOpacity>
        {/* Details */}
        <View>
          <Text>Your Units: {reading}</Text>
        </View>
      </View>
    </>
  );
};

export default Billing;
