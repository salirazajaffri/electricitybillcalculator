import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {TextInput, DataTable} from 'react-native-paper';
import Header from '../components/Header';
const Billing = ({slabs}) => {
  const {goBack} = useNavigation();
  const [reading, setReading] = useState('');
  const [totalUnits, setTotalUnits] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateBilling = value => {
    const setValue = val => (value = val);
    let totalUnits = [];
    let totalAmount = 0;

    for (let i = 0; i < slabs.length; i++) {
      let x = value - slabs[i].end;
      if (slabs[i].end === null) {
        totalUnits.push({units: value, rate: slabs[i].rate});
        break;
      }
      if (x <= 0) {
        totalUnits.push({units: value, rate: slabs[i].rate});
        break;
      } else if (x >= 0) {
        setValue(value - slabs[i].end);
        totalUnits.push({units: slabs[i].end, rate: slabs[i].rate});
      }
    }
    setTotalUnits(totalUnits);

    for (let i = 0; i < totalUnits.length; i++) {
      totalAmount += totalUnits[i].units * totalUnits[i].rate;
    }
    setTotalAmount(totalAmount);
  };
  return (
    <ScrollView>
      <Header callback={goBack} />

      <View style={{marginTop: 36, width: '90%', alignSelf: 'center'}}>
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
            marginVertical: 36,
            alignItems: 'center',
          }}
          onPress={() => {
            calculateBilling(reading);
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
          {totalUnits.length !== 0 && (
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Units</DataTable.Title>
                <DataTable.Title>Rate</DataTable.Title>
              </DataTable.Header>
              {totalUnits.map((t, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>{`${t.units} units`}</DataTable.Cell>
                  <DataTable.Cell>{`@ ${t.rate} / unit`}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          )}
          <View
            style={{
              marginTop: 36,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Text>Units: {reading}</Text>
            <Text>Your Readings: {JSON.stringify(totalUnits)}</Text> */}
            <Text style={{fontSize: 32}}>Total Amount</Text>
            <Text style={{fontSize: 32,fontWeight:"bold"}}>{totalAmount}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Billing;
