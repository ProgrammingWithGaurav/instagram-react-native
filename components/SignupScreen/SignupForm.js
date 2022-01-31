import { View, StyleSheet, Text, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import { firebase, db } from '../../firebase';
import React from 'react';

const SignupForm = ({ navigation }) => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password has to have atleast 8 characters')
    });

    const getRandomProfilePicture = async () => {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        return data.results[0].picture.large
    }

    const onSignup = async (email, password, username) => {
        try {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
            console.log('Account Created ✅🚀')

            db.collection('users')
                .doc(authUser.user.email)
                .set({
                    owner_id: authUser.user.uid,
                    username: username,
                    email: authUser.user.email,
                    profile_picture: await getRandomProfilePicture()
                })
            navigation.navigate('HomeScreen');
        } catch (error) {
            Alert.alert(
                'Some Error',
                error.message,
                [
                    {
                        text: 'OK',
                        style: 'cancel'
                    },
                    {
                        text: 'Login',
                        onPress: () => navigation.push('LoginScreen')
                    }
                ]
            );
        }
    }
    return (
        <View style={styles.wrapper}>
            <Formik

                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={values => { onSignup(values.email, values.password, values.username) }}
                validationSchema={SignupSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid, errors }) => (
                    <>
                        <View style={[styles.inputField,
                        {
                            borderColor: errors.email ? 'red' : '#ccc'
                        }]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: errors.username ? 'red' : '#ccc'
                        }]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>

                        <View style={[styles.inputField,
                        {
                            borderColor: errors.password ? 'red' : '#ccc'
                        }]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>

                        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot Password?</Text>
                        </View>

                        <Pressable titleSize={20} style={styles.button} disabled={!isValid} onPress={handleSubmit}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <View style={styles.signupContainer}>
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#6BB0F5' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
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

    invalidButton: {
        backgroundColor: '#9ACAF7',
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

export default SignupForm;