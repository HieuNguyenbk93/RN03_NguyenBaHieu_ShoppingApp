import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { BackgroundView } from '../../components';

export default class HomeScreen extends Component {
    render() {
        return (
            <BackgroundView>
                <Text> Home </Text>
                <Icon name='home' size={25}/>
            </BackgroundView>
        )
    }
}
