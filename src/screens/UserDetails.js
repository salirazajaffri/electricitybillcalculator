import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import UsersApi from '../apis/UsersApi';
import Header from '../components/Header';

const UserDetails = ({route}) => {
  const {navigate} = useNavigation();
  const {goBack} = useNavigation();
  const {userId} = route.params;
  const [user, setUser] = useState({});
  useEffect(() => {
    UsersApi.get(`/users/${userId}`)
      .then(data => setUser(data.data))
      .catch(err => console.error(err));
    return () => setUser({});
  }, []);
  if (Object.keys(user).length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="crimson" />
      </View>
    );
  } else {
    return (
      <>
        <Header callback={() => goBack()} />
        {/* User Details */}
        <View
          style={{
            flex: 1,
            marginTop: -80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{user.name}</Text>
          <Text>{user.username}</Text>
          <Text>{user.address.suite}</Text>
          <Text>{user.address.street}</Text>
          <Text>{user.address.city}</Text>
          <Text>{user.address.zipcode}</Text>
          {/* button group */}
          <View style={{marginTop: 36}}>
            <TouchableOpacity onPress={() => navigate('Billing')}>
              <Text
                style={{
                  fontSize: 14,
                  backgroundColor: 'crimson',
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  color: '#FFF',
                  borderRadius: 50,
                }}>
                Show Billing
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
};

export default UserDetails;

const styles = StyleSheet.create({});
