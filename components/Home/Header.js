import { View, Text, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
    </View>
  );
};

export default Header;
