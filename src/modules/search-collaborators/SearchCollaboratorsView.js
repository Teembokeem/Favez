import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import * as FaveActions from '../../redux/fave/faveActions';
import * as ListActions from '../../redux/list/listActions';
import SearchCollaboratorsHeader from '../../components/search-collaborators/searchCollaboratorsHeader/searchCollaboratorsHeader';
import SearchCollaboratorsSearchBar from '../../components/search-collaborators/searchCollaboratorsSearchBar/searchCollaboratorsSearchBar';
import Header from '../../components/globals/header/header';
import Thumbnail from '../../components/globals/thumbnail/thumbnail';

const SearchCollaboratorsView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  appendInvitee(invitee) {
    console.log('does he exist?: ', this.props.inviteList.indexOf(invitee) === -1)
    return this.props.inviteList.indexOf(invitee) === -1
    ? this.props.dispatch(ListActions.modifyInviteList(invitee, true))
    : this.props.dispatch(ListActions.modifyInviteList(invitee, false));
  },

  render() {
    console.log('GOT PROPS', this.props);
    const {collaborators, inviteList} = this.props;
    return (
      <View style={styles.container}>
        <SearchCollaboratorsHeader />
        <SearchCollaboratorsSearchBar />
        <ScrollView contentContainerStyle={styles.CollaboratorsContainer}>
          {collaborators.map((collaborator, idx) => {
            if (inviteList.indexOf(collaborator) > -1) {
              return (
                <Thumbnail
                  key={'collaborator ' + idx}
                  collaborator={collaborator}
                  method={this.appendInvitee}
                  iconSpecs={{pack: 'MCIcon', name: 'check-circle'}}
                />
              );
            } else {
              return (
                <Thumbnail
                  key={'collaborator ' + idx}
                  collaborator={collaborator}
                  method={this.appendInvitee}
                  iconSpecs={{pack: 'FAIcon', name: 'inbox'}}
                />
              );
            }
          })}
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
    // flex: 1,
    backgroundColor: '#f6f6f6',
    borderTopWidth: 0.3,
    borderColor: '#a6a6a6'
  },
});

export default SearchCollaboratorsView;
