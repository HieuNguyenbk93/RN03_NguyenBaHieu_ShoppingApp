import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import RootNavigation from './src/navigation/RootNavigation';
import TabNavigation from './src/navigation/TabNavigation';

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<RootNavigation />
			</NavigationContainer>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
})

