import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import * as FaveActions from '../../redux/fave/faveActions';
import AddCollaboratorsHeader from '../../components/add-collaborators/addCollaboratorsHeader/addCollaboratorsHeader';
import Header from '../../components/globals/header/header';
import Thumbnail from '../../components/globals/thumbnail/thumbnail';

const AddFaveBrowseView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  render() {
    const {} = this.props;
    return (
      <View style={styles.container}>
        <AddCollaboratorsHeader/>
        <Header title='Collaborators'/>
        <ScrollView contentContainerStyle={styles.CollaboratorsContainer}>
          <Thumbnail />
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  CollaboratorsContainer: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    borderTopWidth: 0.3,
    borderColor: '#a6a6a6'
  }
});

export default AddFaveBrowseView;
