import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddUserScreen from '@/components/AddUserScreen'; // Importing your new component

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AddUserScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, 
  },
});