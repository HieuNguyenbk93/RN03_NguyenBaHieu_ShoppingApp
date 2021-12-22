import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { COLORS } from '../../themes'

export default class BackgroundView extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='dark-content'/>
                {this.props.children}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})

