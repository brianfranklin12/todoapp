import React from 'react';
import { auth } from '../../firebase';
import { Button } from 'react-native-paper';
import styles from './styles';

export default function Settings() {
  const handleLogout = async () => {
    try {
      await auth.signOut()
    } catch (err) {
      console.error(err) 
    };
  }

  return (
    <Button
      mode="contained"
      compact={false}
      icon="exit-to-app" 
      onPress={handleLogout}
      style={styles.logoutButton}
    >
      Log Out
    </Button>
  )
}