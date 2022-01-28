import { View, Image, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export const BottomTabsIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-cart.png',
    inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-cart.png',
  },
  {
    name: 'Profile',
    active: 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=',
    inactive: 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo='
  },
]

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === 'Profile' ? styles.profilePic : null,
          activeTab === 'Profile' && icon.name === activeTab ? styles.activeProfilePic: null
        ]}
      />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={styles.container}>
        {
          icons.map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#000'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10
  },
  icon: {
    width: 30,
    height: 30,
  },
  profilePic: {
    borderRadius: 50,
  },
  activeProfilePic: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff'
  }
})

export default BottomTabs;
