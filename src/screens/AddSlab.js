import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Header from '../components/Header';

const AddSlab = ({slabs, setSlabs}) => {
  const {goBack} = useNavigation();
  const [addSlab, setAddSlab] = useState({
    start: 0,
    end: 0,
    rate: 0,
  });
  return (
    <>
      <Header callback={goBack} />
      <View>
        <TextInput
          mode="outlined"
          label="start"
          value={addSlab.start}
          onChangeText={e => {
            setAddSlab({...addSlab, start: e});
          }}
        />
        <TextInput
          mode="outlined"
          label="end"
          value={addSlab.end}
          onChangeText={e => {
            setAddSlab({...addSlab, end: e});
          }}
        />
        <TextInput
          mode="outlined"
          label="rate"
          value={addSlab.rate}
          onChangeText={e => {
            setAddSlab({...addSlab, rate: e});
          }}
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 36,
            alignItems: 'center',
          }}
          onPress={() => {
            setSlabs([...slabs, addSlab]);
            goBack();
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
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddSlab;
