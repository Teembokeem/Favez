import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import * as Utils from '../../../utils/Utils';

const renderIf = cond => elm => cond ? elm : null;

function ImagePicker({pickListImage, listImageUri, imageStatus}) {
  console.log("CURRENT_LIST_IMAGE_URI", listImageUri);
  return (
    <View
      style={styles.ImagePickerContainer}
    >
      <TouchableOpacity
        style={styles.CropImageContainer}
        onPress={pickListImage}>
        <View style={styles.FillerImage}>
          {renderIf(imageStatus === 'uploading' || imageStatus === 'prefetching')(
            <View style={styles.indicatorWrapper}>
              <ActivityIndicator
                animating={true}
                style={styles.indicator}
                size={'large'}
              />
            </View>
         )}
         {renderIf(imageStatus === 'prefetched' || Utils.isUrl(listImageUri))(
           <Image style={styles.ListCoverImage} source={{uri:listImageUri}} />
         )}
        </View>
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
    backgroundColor: '#b8b8b8',
    alignItems: 'center'
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
  },
  ListCoverImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
    alignSelf: 'center'
  },
  indicator: {
    flex: 1,
    alignSelf: 'center'
  }

});

export default ImagePicker;
