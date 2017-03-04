import React, {
} from 'react';
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

const window = Dimensions.get('window');

function ContextMenu({setVisible, visible, selectContextItem}) {
  return (
    <View style={styles.overlay}>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visible}
        style={styles.contextMenuModal}
        >
          <View style={styles.container}>
            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => selectContextItem('create')}
              >
                <View style={styles.IconContainer}>
                  <IoniconIcon style={styles.listIcon}name='ios-list'/>
                </View>
                <Text style={styles.IconText}>Create New List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuRow}>
                <View style={styles.IconContainer}>
                  <MCIcon style={styles.linkIcon} name='link-variant'/>
                </View>
                <Text style={styles.IconText}>Add fave from clipboard link</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => selectContextItem('web')}
              >
                <View style={styles.IconContainer}>
                  <MIcon style={styles.webIcon} name='web'/>
                </View>
                <Text style={styles.IconText}>Add fave from website</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuRow}>
                <View style={styles.IconContainer}>
                  <FIcon style={styles.browseIcon} name='compass'/>
                </View>
                <Text style={styles.IconText}>Discover favez by topic</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuRow}
                onPress={() => setVisible()}
              >
                <View style={styles.IconContainer}>
                  <EIcon style={styles.cancelIcon} name='cross'/>
                </View>
                <Text style={styles.IconText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: window.height,
    width: window.width,
    // backgroundColor: 'rgba(40, 40, 40, 0.5)'
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
  menuContainer: {
    height: 220,
    width: 320,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 13,
    overflow: 'hidden'
  },
  menuRow: {
    flex: 1,
    // borderBottomWidth: 1,
    // borderColor: '#b8b8b8',
    paddingLeft: 15,
    // paddingRight: 30,
    // paddingTop: 5,
    // paddingBottom: 5,
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
    fontSize: 25,
    color: '#b8b8b8',
    alignSelf: 'center'
  }
});

export default ContextMenu;
