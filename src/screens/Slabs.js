import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';

const Slabs = () => {
  const slabs = [
    {start: 1, end: 100, rate: 5},
    {start: 101, end: 500, rate: 80},
    {start: 501, end: null, rate: 10},
  ];
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Consumption</DataTable.Title>
          <DataTable.Title>Rates</DataTable.Title>
        </DataTable.Header>
        {slabs.map((slab, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{`${slab.start} - ${slab.end} units`}</DataTable.Cell>
            <DataTable.Cell>{`@ ${slab.rate} / unit`}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
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
