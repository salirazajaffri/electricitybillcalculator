import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import UsersApi from '../apis/UsersApi';

const UserDetails = ({route}) => {
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
      <View>
        <Text>Users Details</Text>
        <Text>{JSON.stringify(user)}</Text>
      </View>
    );
  }
};

export default UserDetails;

const styles = StyleSheet.create({});
