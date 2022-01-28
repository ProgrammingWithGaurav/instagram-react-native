import { View, StyleSheet, Image} from 'react-native';
import React from 'react';
import LoginForm from '../components/LoginScreen/LoginForm';


const Instagram_logo = 'https://cdn-icons-png.flaticon.com/128/174/174855.png';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{uri: Instagram_logo, height: 100, width: 100}}/>
        </View>
        <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 50,
        marginHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    }
})

export default LoginScreen;
