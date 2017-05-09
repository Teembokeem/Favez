import React from 'react'
import {
  TouchableOpacity, View, Text, Image,
  StyleSheet
} from 'react-native'

export default function Button({
  onPress,
  icon = '',
  title = '',
  bgColor = '',
  disabled = false
}) {
  return <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
  >
    <View style={[styles.base, {backgroundColor: bgColor}]}>
      <Image style={styles.icon} source={{uri: icon}}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    width: 140,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5
  },
  title: {
    color: 'white',
    fontFamily: 'OpenSans-Extrabold',
    fontSize: 17
  }
})
