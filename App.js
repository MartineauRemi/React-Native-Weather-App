import React from 'react';
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler';
import Navigation from "./navigation/Navigation"

export default function App() {
  return (
    <Navigation />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
