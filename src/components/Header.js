import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Header = ({callback}) => {
  return (
    <TouchableOpacity
      style={{
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
      }}
      onPress={callback}>
      <Text
        style={{
          fontSize: 14,
          backgroundColor: 'crimson',
          paddingVertical: 8,
          paddingHorizontal: 15,
          color: '#FFF',
          borderRadius: 50,
        }}>
        Back
      </Text>
    </TouchableOpacity>
  );
};

export default Header;
