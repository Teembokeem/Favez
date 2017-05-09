import React from 'react'
import {
  View, StyleSheet, Image
} from 'react-native'

export default function LeftAvatar({uri}) {
  return <View style={styles.base}>
    <Image
      source={!uri
        ? require('../../../../../images/default_avatar.png')
        : {uri}
      }
      style={styles.img}
    />
  </View>
}

const imgSize = 55
const styles = StyleSheet.create({
  base: {
    width: 70,
    marginLeft: 20
  },
  img: {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize/2
  }
})
