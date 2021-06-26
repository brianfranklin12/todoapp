import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ViewAll from '../todos/ViewAll';

const Stack = createStackNavigator();

const TodosTab = () => {
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
          name="viewAll"
          component={ViewAll}
          options={{
            title: 'Todos',
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </>
  )
}
export default TodosTab;