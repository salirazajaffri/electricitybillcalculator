import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import {TextInput} from 'react-native';
import {TextInput} from 'react-native-paper';
import Header from '../components/Header';

const EditSlab = ({route, slabs, setSlabs}) => {
  const {slabIndex} = route.params;
  const {goBack} = useNavigation();
  const [editSlab, setEditSlab] = useState({
    start: null,
    end: null,
    rate: null,
  });
  // useEffect(() => {
  //   setEditSlab({
  //     start: slabs[slabIndex].start,
  //     end: slabs[slabIndex].end,
  //     rate: slabs[slabIndex].rate,
  //   });
  // }, []);
  return (
    <>
      <Header callback={goBack} />
      <View>
        <TextInput
          keyboardType="number-pad"
          mode="outlined"
          label="start"
          value={editSlab.start}
          onChangeText={e => {
            setEditSlab({...editSlab, start: e});
          }}
        />
        <TextInput
          keyboardType="number-pad"
          mode="outlined"
          label="end"
          value={editSlab.end}
          onChangeText={e => {
            setEditSlab({...editSlab, end: e});
          }}
        />
        <TextInput
          keyboardType="number-pad"
          mode="outlined"
          label="rate"
          value={editSlab.rate}
          onChangeText={e => {
            setEditSlab({...editSlab, rate: e});
          }}
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            marginTop: 36,
            alignItems: 'center',
          }}
          onPress={() => {
            let newSlab = slabs;
            newSlab[slabIndex] = editSlab;
            setSlabs(newSlab);
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
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default EditSlab;
