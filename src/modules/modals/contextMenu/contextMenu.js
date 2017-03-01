import React, {
} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';

function ContextMenu({setVisible, visible}) {
  return (
    <View style={styles.container}>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visible}
        >
          <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableOpacity onPress={() => {
              setVisible();
            }}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // backgroundColor: '#f9f9f9',
    // justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0
    // justifyContent: 'center'
  }
});

export default ContextMenu;
