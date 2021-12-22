import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CartScreen, FavoriteScreen, HomeScreen, ProfileScreen } from '../screens';
import { COLORS } from '../themes';
import { ScreenName } from '../utils/constant';
import Icon from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

const TabStack = () => (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
            let iconName;
            let color = focused ? COLORS.black : COLORS.gray
            if (route.name === ScreenName.home) {
                iconName = 'home';
            } else if(route.name === ScreenName.cart) {
                iconName = 'shopping-bag';
            } else if(route.name === ScreenName.favorite) {
                iconName = 'heart-outlined';
            }else if(route.name === ScreenName.profile){
                iconName = 'user';
            }
            return (
                <View>
                    <Icon name={iconName} size={26} color={color}/>
                </View>
            )
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopColor: COLORS.white,
        },
    })}>
        <Tab.Screen name={ScreenName.home} component={HomeScreen}/>
        <Tab.Screen name={ScreenName.favorite} component={FavoriteScreen}/>
        <Tab.Screen name={ScreenName.cart} component={CartScreen}/>
        <Tab.Screen name={ScreenName.profile} component={ProfileScreen}/>
    </Tab.Navigator>
)

const TabNavigation = () => {
    return (
        <TabStack />
    )
}

export default TabNavigation
