import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native'

const InviteAction = ({onPress, icon, title}) => {
  return <TouchableOpacity onPress={onPress}>
    <View style={styles.actionBtnView}>
      <Image source={icon} style={styles.leftIcon}/>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={require('../../../../images/forward.png')}
        style={styles.rightIcon}
      />
    </View>
  </TouchableOpacity>
}
export default InviteAction

const styles = StyleSheet.create({
  actionBtnView: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: 'contain'
  },
  title: {
    flex: 1,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16
  },
  rightIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 20
  }
})
