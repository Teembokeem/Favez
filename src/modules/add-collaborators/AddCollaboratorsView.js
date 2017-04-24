import React from 'react';
import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as FaveActions from '../../redux/fave/faveActions';
import AddCollaboratorsHeader from '../../components/add-collaborators/addCollaboratorsHeader/addCollaboratorsHeader';
import Header from '../../components/globals/header/header';
const AddFaveBrowseView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  render() {
    const {lists} = this.props;
    return (
      <View style={styles.container}>
        <AddCollaboratorsHeader/>
        <Header title='Collaborators'/>
        <View style={styles.CollaboratorsContainer}>
          <View style={styles.CollaboratorContainer}>
            <View style={styles.CollaboratorImageContainer}>
              <Image />
            </View>
            <View></View>
            <View></View>
          </View>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Header: {
    fontSize: 30
  }
});

export default AddFaveBrowseView;
