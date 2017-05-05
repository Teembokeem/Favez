import React from 'react'
import {View, StyleSheet} from 'react-native'

export default function Divider() {
  return <View style={styles.base}></View>
}

const styles = StyleSheet.create({
  base: {height: 1, backgroundColor: '#f4f4f4'}
})
