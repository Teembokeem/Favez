import React from 'react'
import {
  View, StyleSheet
} from 'react-native'

export default function Center({children}) {
  return <View style={styles.base}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingTop: 10
  }
})
