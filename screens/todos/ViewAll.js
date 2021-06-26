import React, { useState, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { List, Divider, FAB } from "react-native-paper";

import { db, auth } from '../../firebase';
import styles from "./styles"


export default function ViewAll({ navigation }) {
  const [todos, setTodos] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const ref = db.collection('todos')
    .where('belongsTo', '==', user.uid)
    .orderBy('createdAt', 'desc');
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

  const handleComplete = async (todo) => {
    const ref = db.collection('todos').doc(todo.id);

    try {
      await ref.set({
        completed: !todo.completed,
      }, { merge: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ScrollView>
        <View>
          {todos.map(todo => (
            <View key={todo.id}>
              <List.Item 
                title={todo.task}
                onPress={() => handleComplete(todo)}
                titleStyle={todo.completed
                ? styles.complete : styles.notComplete}
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