import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  Modal,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet
} from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Foundation';
import EIcon from 'react-native-vector-icons/Entypo';
import OIcon from 'react-native-vector-icons/Octicons';
const window = Dimensions.get('window');

function iconDeserializer(icon) {
  const {set, identifier, style} = icon;
  switch (set) {
    case 'Ionicon':
      return (<IoniconIcon style={styles[style]} name={identifier} />);
    case 'MCIcon':
      return (<MCIcon style={styles[style]} name={identifier} />);
    case 'MIcon':
      return (<MIcon style={styles[style]} name={identifier} />);
    case 'FIcon':
      return (<FIcon style={styles[style]} name={identifier} />);
    case 'EIcon':
      return (<EIcon style={styles[style]} name={identifier} />);
    case 'OIcon':
      return (<OIcon style={styles[style]} name={identifier} />);
    default:
      return null;
  }
}


function ContextMenu({toggleContextMenu, visible, items, source}) {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={visible}
      style={styles.contextMenuModal}
      >
        <View style={styles.container}>
          <View style={styles.menuContainer}>
            {items.map((item, idx) => {
              let {buttonAction, uiText} = item;
              return (
                <TouchableOpacity
                  key={'icon ' + idx}
                  style={styles.menuRow}
                  onPress={() => {toggleContextMenu(source); Actions[buttonAction]();}}
                >
                  <View style={styles.IconContainer}>
                    {iconDeserializer(item.icon)}
                  </View>
                  <Text style={styles.IconText}>{uiText}</Text>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              style={styles.menuRow}
              onPress={() => toggleContextMenu(source)}
            >
              <View style={styles.IconContainer}>
                <EIcon style={styles.cancelIcon} name='cross'/>
              </View>
              <Text style={styles.IconText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: window.height,
    width: window.width
  },
  container: {
    backgroundColor: 'rgba(40, 40, 40, 0.9)',
    flex: 1,
    alignSelf: 'center',
    height: window.height,
    width: window.width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingBottom: 20
  },
  contextMenuModal: {
    backgroundColor: 'rgba(40, 40, 40, 0.9)'
  },
  menuContainer: {
    // height: 350,
    width: 320,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 13,
    overflow: 'hidden'
  },
  menuRow: {
    height: 45,
    paddingLeft: 30,
    flexDirection: 'row'
  },
  IconContainer: {
    width: 20,
    alignSelf: 'center'
  },
  IconText: {
    marginLeft: 10,
    alignSelf: 'center',
    fontFamily: 'Hind-Medium',
    color: '#181818',
    fontSize: 15
  },
  listIcon: {
    fontSize: 30,
    color: '#b8b8b8',
    alignSelf: 'center'
  },
  deleteIcon: {
    fontSize: 20,
    color: '#ff0303',
    alignSelf: 'center'
  },
  linkIcon: {
    maxWidth: 50,
    fontSize: 20,
    color: '#b8b8b8',
    alignSelf: 'center'
  },
  webIcon: {
    maxWidth: 50,
    fontSize: 20,
    color: '#b8b8b8',
    alignSelf: 'center'
  },
  browseIcon: {
    maxWidth: 50,
    fontSize: 20,
    color: '#b8b8b8',
    alignSelf: 'center'
  },
  cancelIcon: {
    maxWidth: 50,
    fontSize: 23,
    color: '#b8b8b8',
    alignSelf: 'center'
  }
});

export default ContextMenu;
