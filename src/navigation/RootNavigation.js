import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { SignInScreen, SignUpScreen } from '../screens';
import { ScreenName } from '../utils/constant';

const Stack = createNativeStackNavigator();

const screenOption = () => {
    return {
        headerShown: false
    }
}

const RootStack = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name={ScreenName.signin} component={SignInScreen}/>
        <Stack.Screen name={ScreenName.signup} component={SignUpScreen}/>
    </Stack.Navigator>
)

const RootNavigation = () => {
    return (
        <RootStack />
    )
}

export default RootNavigation
