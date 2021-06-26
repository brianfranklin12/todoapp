import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { List, Divider, FAB } from "react-native-paper";

import { db } from '../../firebase';
import styles from "./styles"


export default function ViewAll({ navigation }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const ref = db.collection('todos');
    ref.onSnapshot(query => {
      const objs = [];
      query.forEach(doc => {
        objs.push({
          id: doc.id, 
          ...doc.data(),
        });
      });
      setTodos(objs);
    });
  }, [])

  return (
    <>
      <ScrollView>
        <View>
          {todos.map(todo => (
            <View key={todo.id}>
              <List.Item 
                title={todo.task}
              />
              <Divider />
            </View>
          ))}
        </View>
      </ScrollView>
      <FAB 
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('addTodo')}
      />
    </>
  )
}