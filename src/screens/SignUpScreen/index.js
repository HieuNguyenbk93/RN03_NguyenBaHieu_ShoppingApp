import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import { BackgroundView } from '../../components'
import { ScreenName } from '../../utils/constant'

const SignUpScreen = ({navigation}) => {
    return (
        <BackgroundView>
            <Text> SignUp </Text>
            <Button 
                title='SignIn'
                onPress={ () => navigation.navigate(ScreenName.signin)}
            />
        </BackgroundView>
    )
}

export default SignUpScreen;
