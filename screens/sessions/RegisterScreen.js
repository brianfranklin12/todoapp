import React, { useRef } from 'react'
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';
import { auth } from '../../firebase';

const RegisterScreen = ({ navigation }) => {
  const { control, handleSubmit, watch, register, formState: { errors } } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data) => {
    const { email, password } = data;
    auth.createUserWithEmailAndPassword(email.trim().toLowerCase(), password)
  }
  
  return (
    <View style={styles.authFormContainer}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.formInput}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      <View style={styles.errorMessage}>
        {errors.email && <Text style={styles.errorText}>You must fill in your email</Text>}
      </View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.formInput}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      <View style={styles.errorMessage}>
        {errors.password && <Text style={styles.errorText}>You must fill in your password</Text>}
      </View>
      <Controller 
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Confirm Password"
            mode="outlined"
            style={styles.formInput}
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="passwordConfirmation"
        rules = {{
          required: true,
          validate: (value) => value === password.current || 'The passwords do not match'
        }}
      />
      <View style={styles.errorMessage}>
        {errors.passwordConfirmation && <Text style={styles.errorText}>{errors.passwordConfirmation.message}</Text>}
      </View>
   
      <View>
        <Button
          mode="contained"
          compact={false}
          onPress={handleSubmit(onSubmit)}
          icon="account-arrow-right"
          style={styles.submitButton}
        >
          Register Account 
        </Button>
      </View>
      <View style={styles.switchScreenText}>
        <Text>
          Do you already have an account?
        </Text>
      </View>
      <Button
        mode="outlined"
        style={styles.switchButton}
        icon="account-plus"
        compact
        onPress={() => navigation.goBack()}
      >
        Sign In
      </Button>
    </View>
  )
};
export default RegisterScreen;