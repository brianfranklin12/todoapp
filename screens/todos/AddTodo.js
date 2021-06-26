import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import firebase from 'firebase';
import { auth, db } from '../../firebase';

import styles from './styles';

export default function AddTodo({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    const user = auth.currentUser;

    try {
      const todo = {
        task: data.todo,
        completed: false,
        belongsTo: user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      const ref = db.collection('todos');

      await ref.add(todo);
    
    navigation.goBack();
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Controller 
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput 
            label="Enter Todo"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.field}
          />
        )}
        name="todo"
        rules={{required: true}} 
        defaultValue=""
      />
      <View style={styles.errorMessage}>
        {errors.todo && <Text style={styles.errorText}>You must fill in a todo</Text>}
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={handleSubmit(onSubmit)}
      />
    </>
  )
}