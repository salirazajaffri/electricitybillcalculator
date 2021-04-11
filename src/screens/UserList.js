import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import UserListItem from '../components/UserListItem';

const UserList = ({users}) => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem item={item} />}
      keyExtractor={user => user.id}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({});
