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
import SearchCollaboratorsHeader from '../../components/search-collaborators/searchCollaboratorsHeader/searchCollaboratorsHeader';
import SearchCollaboratorsSearchBar from '../../components/search-collaborators/searchCollaboratorsSearchBar/searchCollaboratorsSearchBar';
import Header from '../../components/globals/header/header';
import Thumbnail from '../../components/globals/thumbnail/thumbnail';

const SearchCollaboratorsView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  render() {
    console.log('GOT PROPS', this.props);
    const {collaborators} = this.props;
    return (
      <View style={styles.container}>
        <SearchCollaboratorsHeader />
        <SearchCollaboratorsSearchBar />
        <ScrollView contentContainerStyle={styles.CollaboratorsContainer}>
          {collaborators.map((collaborator) => {
            return (
              <Thumbnail
                collaborator={collaborator}
              />
            );
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
    flex: 1,
    backgroundColor: '#f6f6f6',
    borderTopWidth: 0.3,
    borderColor: '#a6a6a6'
  },
});

export default SearchCollaboratorsView;
