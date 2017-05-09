import React from 'react'
import {
  View, StyleSheet
} from 'react-native'

export default function Right({children}) {
  return <View style={styles.base}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  base: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
