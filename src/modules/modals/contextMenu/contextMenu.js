import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

const ContextMenu = React.createClass({
  hello: 'ho',

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  render() {
    const modalVisible = false;
    console.log('yay', this);
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!modalVisible);
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(!modalVisible);
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
  }
});

export default ContextMenu;
