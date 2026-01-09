import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserListScreen from '@/components/screens/UserListScreen';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <UserListScreen />
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