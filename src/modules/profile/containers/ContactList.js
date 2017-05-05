import React from 'react'
import {
  View, StyleSheet, ListView,
  TouchableOpacity, Platform,
  ActivityIndicator,
  Alert,
  Linking
} from 'react-native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'
import Header from '../../../components/globals/header/header'
import Divider from '../presenters/Divider'
import Contact from '../presenters/Contact'
import SearchTextInput from '../presenters/SearchTextInput'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ContactList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: ds.cloneWithRows([{}, {}]),
      searchText: ''
    }

    this.onPressInvite = this.onPressInvite.bind(this)
  }
  onPressInvite(contact) {
    const number = '000000000'
    const body = 'Hey, join me on favez! http://favez.co/download'
    const url = `sms:${number}?body=${encodeURIComponent(body)}`
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url)
      }
    }).catch(err => console.warn('An unexpected error happened', err));
  }
  renderIf = condition => element => condition ? element : null;
  render() {
    const {
      contacts,
      searchText
    } = this.state

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
          {this.renderIf(false)(<ActivityIndicator style={styles.loading}/>)}

          {this.renderIf(true)(<Divider/>)}
          {this.renderIf(true)(<ListView
            dataSource={contacts}
            renderRow={contact => {
              return <View>
                <Contact onPressInvite={() => this.onPressInvite(contact)}/>
                <Divider/>
              </View>
            }}
          />)}

        </View>
    </View>
  }
}
export default ContactList

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
