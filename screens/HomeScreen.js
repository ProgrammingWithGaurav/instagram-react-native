import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import {Posts} from '../data/posts';
import BottomTabs, { BottomTabsIcons } from '../components/Home/BottomTabs';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
        <ScrollView>
          {
            Posts.map((post, index) => (
              <Post post={post} key={index}/>
            ))
          }
        </ScrollView>
        <BottomTabs icons={BottomTabsIcons}/>
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
