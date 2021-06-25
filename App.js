import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-nativation/stack';

import LoginScreen from './screens/sessions/LoginScreen';


export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  auth.onAuthStateChanged(user => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {signedIn
        ? (
          <Text>Signed in</Text>
        ) : (
          <Text>Not signed in</Text>
        )}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
