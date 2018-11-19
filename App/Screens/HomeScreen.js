import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
{/*import { RNCamera } from 'react-native-camera';*/}

export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={material.body2}>Unsplash</Text>
          <Text style={[material.caption, {fontSize: 10}]}>Popular</Text>
        </View>
      ),
      tabBarIcon: ({ tintColor }) => (
        <Entypo name="video"
          size={Metrics.icons.medium}
          color={tintColor} />
      ),



    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}> Camera </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 100,
   paddingVertical: 100
  },

  baseText: {
   fontFamily: 'Cochin',
 },
 titleText: {
   fontSize: 20,
   fontWeight: 'bold',
 },

});
