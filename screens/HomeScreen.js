import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    background: 'black',
    flex: 1
  }
})

export default HomeScreen;
