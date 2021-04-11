import React, {useState} from 'react';
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
import EditSlab from '../screens/EditSlab';
import AddSlab from '../screens/AddSlab';

const Navigation = () => {
  const [slabs, setSlabs] = useState([
    {start: '1', end: '100', rate: '5'},
    {start: '101', end: '500', rate: '80'},
    {start: '501', end: null, rate: '10'},
  ]);
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

  const SlabStack = () => (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Slab">
      <Stack.Screen name="Slabs">
        {props => <Slabs {...props} slabs={slabs} setSlabs={setSlabs} />}
      </Stack.Screen>
      <Stack.Screen name="EditSlab">
        {props => <EditSlab {...props} slabs={slabs} setSlabs={setSlabs} />}
      </Stack.Screen>
      <Stack.Screen name="AddSlab">
        {props => <AddSlab {...props} slabs={slabs} setSlabs={setSlabs} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Users" component={stack} />
        <Tabs.Screen name="Slabs" component={SlabStack} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
