import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import {Posts} from '../data/posts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
        <ScrollView>
          {
            Posts.map((post, index) => (
              <Post post={post} key={index}/>
            ))
          }
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})

export default HomeScreen;
