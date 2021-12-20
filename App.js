import React, { Component } from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
	render() {
		return (
			<SafeAreaView>
				<View>
					<Text> textInComponent </Text>
					<Icon name="facebook" backgroundColor="#3b5998"/>
				</View>
			</SafeAreaView>
			
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})

