import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const UserListItem = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        navigate('UserDetails', {
          userId: item.id,
        })
      }
      style={{
        paddingLeft: 20,
        paddingVertical: 3,
        margin: 5,
        // marginLeft: 10,
      }}>
      <Text>Name : {item.name}</Text>
      <Text>Username : {item.username}</Text>
      <Text>Email : {item.email}</Text>
    </TouchableOpacity>
  );
};

export default UserListItem;

const styles = StyleSheet.create({});
