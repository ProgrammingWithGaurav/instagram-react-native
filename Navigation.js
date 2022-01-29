import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import NewPostScreen from "./screens/NewPostScreen";
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
}
export default const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='SignupScreen' screenOptions={screenOptions}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        </Stack.Navigator>
    </NavigationContainer>
)