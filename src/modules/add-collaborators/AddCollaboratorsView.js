import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UserActions from '../../redux/user/userActions';
import AddCollaboratorsHeader from '../../components/add-collaborators/addCollaboratorsHeader/addCollaboratorsHeader';
import Header from '../../components/globals/header/header';
import Thumbnail from '../../components/globals/thumbnail/thumbnail';

const AddFaveBrowseView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  search() {
    console.log('search method');
    this.props.dispatch(UserActions.findCollaborators())
      .then((res) => {
        console.log('post user action find collaborators', res);
        Actions.searchCollaborators();
      })
      .catch((err) => console.log('Error', err));
  },
  render() {
    const {} = this.props;
    return (
      <View style={styles.container}>
        <AddCollaboratorsHeader
          search={this.search}
        />
        <Header title='Collaborators'/>
        <ScrollView contentContainerStyle={styles.CollaboratorsContainer}>
          <Thumbnail />
          {/*TODO: send private method, and icon for different actions.*/}
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
