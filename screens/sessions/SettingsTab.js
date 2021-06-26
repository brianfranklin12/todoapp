import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../settings/Settings';

const Stack = createStackNavigator();

const SettingsTab = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#29434e'
          }
        }}
      >
      <Stack.Screen 
          name="settings"
          component={Settings}
          options={{
            title: 'Settings',
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </>
  )
}
export default SettingsTab;