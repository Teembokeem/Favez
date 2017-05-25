import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch
} from 'react-native';
import styles from '../styles';
import Header from '../../../components/globals/header/header';
import IoniconIcon from 'react-native-vector-icons/Ionicons';

class PushNotificationsView extends React.Component {

  componentWillMount() {

  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeftButtons}>
          <TouchableOpacity onPress={Actions.pop}>
            <IoniconIcon style={styles.headerButtonIcon} name='md-arrow-round-back'/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView>
          <Header title={'PUSH \nNOTIFICATIONS'}/>
          <View style={styles.contentContainer}>

          </View>
        </ ScrollView>
      </View>
    );
  }

}

export default PushNotificationsView;
