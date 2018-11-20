import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { material } from 'react-native-typography';
import { Metrics } from '../Themes';
import { Entypo } from '@expo/vector-icons';
import Feed from '../Components/Feed'
import { Camera, Permissions } from 'expo';


export default class HomeScreen extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

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
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {

      return (
        <View style={styles.container}>
          <Text style={styles.baseText}> Camera </Text>
          <Camera style={{ flex: 1 }} type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
        </View>
      );
    }
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