import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Wrapper({children}) {
  return <View style={styles.base}>{children}</View>
}

const styles = StyleSheet.create({
  base: {
    height: 70,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
    alignItems: 'center'
  }
})
