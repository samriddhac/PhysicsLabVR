import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import ExperimentGallery from './components/experiment-gallary';

export default class PhysicsLabVR extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#fff'}}>
        <ExperimentGallery />
      </View>
    );
  }
};

AppRegistry.registerComponent('PhysicsLabVR', () => PhysicsLabVR);
