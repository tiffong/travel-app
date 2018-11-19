import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import React from 'react';
import { Images, Colors, Metrics } from '../Themes'
import { StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screens/HomeScreen'
import BookmarkScreen from '../Screens/BookmarkScreen'
import BookmarkViewerScreen from '../Screens/BookmarkViewerScreen'
import UserProfileScreen from '../Screens/UserProfileScreen'

// Manifest of possible screens
const TabNav = createBottomTabNavigator({
  Record: { screen: HomeScreen },
  Create:   { screen: BookmarkViewerScreen },
  Profile:   { screen: UserProfileScreen },
  Explore:   { screen: BookmarkScreen },
}, {

// Default config for all screens is the Record Screen
  initialRouteName: 'Record',
  tabBarOptions: {
    activeTintColor: Colors.black,
    showLabel: true,
  },
})

export default TabNav
