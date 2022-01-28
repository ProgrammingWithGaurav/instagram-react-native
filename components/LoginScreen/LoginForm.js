import { View, StyleSheet, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';

const LoginForm = () => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor='#444'
          placeholder='Phone number, username, or email'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor='#444'
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType='password'
        />
      </View>
      <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
        <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
      </View>
      <Pressable titleSize={20} style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={{color: '#6BB0F5'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
  },
  inputField: {
    bordreRadius: 4,
    padding: 8,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1
  },

  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  }
})

export default LoginForm;