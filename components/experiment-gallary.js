import React, { Component } from 'react';
import {AppRegistry, asset, Pano, Text, Image, View} from 'react-vr';
import CylindricalPanel from 'CylindricalPanel';
const VrButton = require('VrButton');

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  render() {
    return (
      <VrButton
        onClick={() => {
          this.setState({open: !this.state.open});
        }}
      >
        <Image
          style={{
            borderRadius: 20,
            height: this.state.open ? 120 : 60,
            margin: 10,
            width: this.state.open ? 200 : 100}}
          source={{
            uri: 'https://facebook.github.io/react/img/logo_og.png',
          }}
        />
      </VrButton>
    );
  }
}

export default class ExperimentGallery extends Component {
	render() {
    return (
      <View>
      	<Pano source={asset('space.jpg')}/>
          <View
            style={{
              opacity: 1,
              width: 4096,
              height: 1000,
              flexDirection:'row',
              alignItems: 'stretch',
              justifyContent: 'center',
              backgroundColor: '#fff'
            }}
          >
            <Image
              style={{
                borderRadius: 20,
                backgroundColor: 'red',
                borderWidth: 10,
                width: 100,
                height: 120,
                transform: [ {translate:[0,0,-12]}]
              }}
              source={{
                uri: 'https://facebook.github.io/react/img/logo_og.png',
              }}
            />
            <Button />
          </View>
      </View>
    );
  }
}