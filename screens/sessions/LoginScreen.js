import React from 'react'
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';

const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
      <View>
        <Button
          mode="contained"
          compact={false}
          onPress={handleSubmit(onSubmit)}
          icon="account-arrow-right"
          style={styles.submitButton}
        >
          Sign in
        </Button>
      </View>
      <View style={styles.switchScreenText}>
        <Text>
          Don't have an account yet?
        </Text>
      </View>
      <Button
        mode="outlined"
        style={styles.switchButton}
        icon="account-plus"
        compact
        onPress={() => navigation.navigate('register')}
      >
        Register Account
      </Button>
    </View>
  )
};
export default LoginScreen;