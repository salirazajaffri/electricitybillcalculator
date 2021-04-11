import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// navigators
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens
import UserDetails from '../screens/UserDetails';
import UsersScreen from '../screens/UserList';
import Billing from '../screens/Billing';
import Slabs from '../screens/Slabs';

const Navigation = () => {
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();
  const stack = () => (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Users">
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="Billing" component={Billing} />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Users" component={stack} />
        <Tabs.Screen name="Slabs" component={Slabs} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
