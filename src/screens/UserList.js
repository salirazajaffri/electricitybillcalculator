import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import UsersApi from '../apis/UsersApi';
import UserListItem from '../components/UserListItem';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UsersApi.get('/users')
      .then(data => setUsers(data.data))
      .catch(err => console.error(err));
  }, []);
  if (users) {
    return (
      <FlatList
        data={users}
        renderItem={({item}) => {
          return <UserListItem item={item} />;
        }}
        keyExtractor={user => user.id}
      />
    );
  } else {
    return <Text>Loading</Text>;
  }
};

export default UserList;

const styles = StyleSheet.create({});
