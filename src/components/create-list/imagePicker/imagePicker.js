import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

function ImagePicker() {
  return (
    <View
      style={styles.ImagePickerContainer}
    >
      <TouchableOpacity
        style={styles.CropImageContainer}
      >
        <View style={styles.FillerImage}></View>
      </TouchableOpacity>
      <View
        style={styles.ImagePickerTextContainer}
      >
        <Text
          style={styles.ImagePickerText}
        >
          Tap to change list cover picture
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ImagePickerContainer: {
    paddingTop: 10,
    width: 375,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    paddingBottom: 10
  },
  CropImageContainer: {
    flex: 1,
    paddingTop: 7,
    alignItems: 'center'
  },
  FillerImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#b8b8b8'
  },
  ImagePickerTextContainer: {
    paddingTop: 4,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ImagePickerText: {
    fontFamily: 'Hind-Medium',
    fontSize: 15,
    color: '#b8b8b8'
  }

});

export default ImagePicker;
