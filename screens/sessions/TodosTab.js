import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import ViewAll from '../todos/ViewAll';
import AddTodo from '../todos/AddTodo';

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
        <Stack.Screen
          name="addTodo"
          component={AddTodo}
          options={{
            title: 'Add Todo',
            headerTintColor: "#fff"
          }}
        />
      </Stack.Navigator>
    </>
  )
}
export default TodosTab;