import React from 'react'
import {
  View, StyleSheet, ListView,
  TouchableOpacity, Platform,
  ActivityIndicator,
  Linking,
  InteractionManager,
  Alert
} from 'react-native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'
import Header from '../../../components/globals/header/header'
import Divider from '../presenters/Divider'
import Contact from '../presenters/Contact'
import SearchTextInput from '../presenters/SearchTextInput'
import {connect} from 'react-redux'
var Contacts = require('react-native-contacts')

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

function toStr(str){
  return str ? str : ''
}
class ContactList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      searchText: '',
      loading: true
    }

    this.onPressInvite = this.onPressInvite.bind(this)
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      Contacts.getAll((err, contacts) => {
        if(err == 'denied') {
          Alert.alert('No permission to access phone contacts')
          Actions.pop()
        }

        const phoneNumberContacts = contacts.map(contact => ({
          ...contact,
          mobilePhoneNumber: this.getMobilePhoneNumber(contact.phoneNumbers)
        })).filter(contact => contact.mobilePhoneNumber)

        this.setState({
          contacts: phoneNumberContacts,
          loading: false
        })
      })
    })
  }
  getMobilePhoneNumber(phoneNumbers) {
    const mobilePhoneNumberItem = phoneNumbers.find(pn => pn.label === 'mobile')
    if (mobilePhoneNumberItem) {
      return mobilePhoneNumberItem.number
    }
    return null
  }
  onPressInvite(contact) {
    const number = contact.mobilePhoneNumber
    const body = 'Hey, join me on favez! http://favez.co/download'
    const url = `sms:${number}?body=${encodeURIComponent(body)}`
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.warn('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url)
      }
    }).catch(err => console.warn('An unexpected error happened', err));
  }
  filter(contacts, searchText) {
    if (!searchText) return contacts
    return contacts.filter(({givenName, middleName, familyName, phoneNumberContacts}) => {
      const namePhone = toStr(givenName) + ' ' +
        toStr(middleName) + ' ' +
        toStr(familyName) + ' ' +
        toStr(phoneNumberContacts)
      return namePhone.toUpperCase().indexOf(searchText.toUpperCase()) > -1
    })
  }

  renderIf = condition => element => condition ? element : null;
  render() {
    const {
      contacts,
      searchText,
      loading
    } = this.state

    const filteredContacts = ds.cloneWithRows(this.filter(contacts, searchText))

    return <View style={styles.base}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={Actions.pop}
            style={styles.backBtn}
          >
            <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back'/>
            </TouchableOpacity>
          <Header title={'INVITE FROM\nCONTACTS'}/>
        </View>

        <SearchTextInput
          value={searchText}
          onChangeText={searchText => this.setState({searchText})}
        />

        <View style={styles.listViewWrapper}>
          {this.renderIf(loading)(<ActivityIndicator style={styles.loading}/>)}

          {this.renderIf(!loading)(<Divider/>)}
          {this.renderIf(!loading)(<ListView
            dataSource={filteredContacts}
            renderRow={contact => {
              return <View>
                <Contact
                  contact={contact}
                  onPressInvite={() => this.onPressInvite(contact)}
                />
                <Divider/>
              </View>
            }}
          />)}

        </View>
    </View>
  }
}
export default connect(state => ({

}), dispatch => ({
  dispatch
}))(ContactList)

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        paddingTop: 20
      }
    })
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 10,
    width: 40
  },
  headerLeftButtonIcon: {
    width: 35,
    fontSize: 30,
    color: '#000000',
    alignSelf: 'flex-start'
  },

  listViewWrapper: {
    backgroundColor: 'white'
    //flex: 1
  }
})
