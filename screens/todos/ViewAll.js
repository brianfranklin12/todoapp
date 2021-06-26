import React, { useState, useEffect } from "react";
import { Alert, ScrollView, View } from "react-native";
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

  const handleDelete = async (todo) => {
    const ref = db.collection('todos').doc(todo.id);

    try {
      Alert.alert(
        'Are you sure?',
        'Are you sure you want to delete?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
          },
          {
            text: 'Delete',
            onPress: async () => await ref.delete(),
          }
        ],
      )
    } catch (err) {
      console.err(err);
    }
  }

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
                onLongPress={() => handleDelete(todo)}
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