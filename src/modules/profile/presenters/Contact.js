import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Contact({onPressInvite, contact}) {
  const {
    familyName,
    givenName,
    mobilePhoneNumber
  } = contact
  return <View style={styles.base}>
    <View style={styles.details}>
      <Text style={styles.t1}>{givenName + ' ' + familyName}</Text>
      <Text style={styles.t2}>{mobilePhoneNumber}</Text>
    </View>
    <TouchableOpacity
      style={styles.inviteBtn}
      onPress={onPressInvite}
    >
      <View style={styles.inviteBtnView}>
        <Text style={styles.inviteText}>INVITE</Text>
      </View>
    </TouchableOpacity>
  </View>
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    height: 70,
    flexDirection: 'row'
  },
  t1: {
    fontFamily: 'OpenSans-Extrabold'
  },
  t2: {
    fontFamily: 'OpenSans-Semibold',
    color: '#a4a4a4',
    marginTop: 5
  },
  inviteBtn: {
    alignSelf: 'center',
    marginRight: 15
  },
  inviteBtnView: {
    backgroundColor: '#0076ff',
    width: 70,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  details: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15
  },
  inviteText: {
    color: 'white',
    fontFamily: 'OpenSans-Extrabold',
    fontSize: 13
  }
})
