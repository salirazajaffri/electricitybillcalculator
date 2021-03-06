import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const Slabs = props => {
  // slabs and set slabs are in props
  const {navigate} = useNavigation();
  let value = 586;
  let totalUnits = [];
  props.slabs.map(slab => {
    if (value >= slab.start && value <= slab.end) {
      value = value - slab.end;
      let unit = value - slab.end;

      totalUnits.push({
        units: unit,
        rate: slab.rate,
      });
    }
  });
  console.log(totalUnits);
  return (
    <View style={{flex: 1}}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Consumption</DataTable.Title>
          <DataTable.Title>Rates</DataTable.Title>
        </DataTable.Header>
        {props.slabs.map((slab, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{`${slab.start} - ${slab.end} units`}</DataTable.Cell>
            <DataTable.Cell>{`@ ${slab.rate} / unit`}</DataTable.Cell>
            <DataTable.Cell>
              <TouchableOpacity
                onPress={() => navigate('EditSlab', {slabIndex: index})}>
                <Text style={{marginRight: 15}}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Delete Slab', 'Are you sure?', [
                    {
                      text: 'No',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'Yes',
                      onPress: () => {
                        const filteredSlabs = props.slabs.filter(
                          slab => slab !== props.slabs[index],
                        );

                        props.setSlabs(filteredSlabs);
                      },
                    },
                  ]);
                }}>
                <Text>X</Text>
              </TouchableOpacity>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          backgroundColor: 'crimson',
          width: 45,
          height: 45,
          borderRadius: 45 / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigate('AddSlab')}>
        <Text style={{color: '#FFF', fontSize: 45 / 2, fontWeight: '500'}}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};
// {slabs.map(slab => (
//     <View key={slab.start}>
//       <Text>Range</Text>
//       <Text>
//         {slab.start} - {slab.end}
//       </Text>
//     </View>
//   ))}
export default Slabs;

// function breakNumbers(num){
//     var nums = num.toString().split('');
//     var len = nums.length;
//     var answer = nums.map(function(n, i) {
//       return n + (Array(len - i - 1).fill(0)).join('');
//     });
//       return answer.map(Number).filter(function(n) {return n !== 0;});
//   }
