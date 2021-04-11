import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserListItem = ({item}) => {
  const {name, username, email} = item;
  return (
    <View
      style={{
        padding: 5,
        // margin:10,

        marginLeft: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 8,
      }}>
      <Text>Name : {name}</Text>
      <Text>Username : {username}</Text>
      <Text>Email : {email}</Text>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({});
