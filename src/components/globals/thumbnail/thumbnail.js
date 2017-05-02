import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const AddFaveBrowseView = React.createClass({

  componentWillMount() {
  },

  renderIconSpecs(specs) {
    const {pack, name} = specs;
    switch (pack) {
      case 'FAIcon':
        return (<FAIcon style={styles[name]} name={name}/>);
      case 'MCIcon':
      default:
        return (<MCIcon style={styles[name]} name={name}/>);
    }
  },

  render() {
    const {collaborator, method, iconSpecs} = this.props;
    const {id, image, username, profile} = collaborator;
    return (
        <View style={styles.CollaboratorContainer}>
          <View
            style={styles.CollaboratorImageContainer}
          >
            <Image source={image ? {uri: image} : require('../../../../images/default_avatar.png')} style={styles.CollaboratorImage}/>
          </View>
          <View
            style={styles.CollaboratorInfoContainer}
          >
            <View style={styles.CollaboratorInfoNameContainer}>
              <Text style={styles.CollaboratorInfoName}>@{username}</Text>
            </View>
            <View style={styles.CollaboratorInfoTagContainer}>
              <Text style={styles.CollaboratorInfoTag}>{profile ? profile : ''}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.CollaboratorDeleteContainer}
            onPress={() => method(collaborator)}
          >
            {this.renderIconSpecs(iconSpecs)}
          </TouchableOpacity>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  CollaboratorContainer: {
    // flex: 1,
    paddingLeft: 18,
    alignItems: 'center',
    paddingRight: 18,
    backgroundColor: 'white',
    flexDirection: 'row',
    minHeight: 70,
    borderTopWidth: 1,
    borderColor: '#f6f6f6'
  },
  CollaboratorImageContainer: {
    flex: 1
  },
  CollaboratorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey'
  },
  CollaboratorInfoContainer: {
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 18,
    flexDirection: 'column'
  },
  CollaboratorInfoNameContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 15
  },
  CollaboratorInfoName: {
    color: '#333333',
    maxHeight: 20,
    fontFamily: 'Hind-Bold',
    fontSize: 15
  },
  CollaboratorInfoTagContainer: {
    flex: 1,
    paddingBottom: 14
  },
  CollaboratorInfoTag: {
    maxHeight: 20,
    color: '#a8a8a8',
    fontFamily: 'Hind-SemiBold',
    fontSize: 13
  },
  CollaboratorDeleteContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  CollaboratorDeleteIcon: {
    fontSize: 27,
    color: 'red'
  },
  'delete': {
    fontSize: 30,
    color: 'red'
  },
  'inbox': {
    fontSize: 25,
    color: 'dodgerblue'
  },
  'check-circle': {
    fontSize: 25,
    color: '#4caf4e'
  }
});

export default AddFaveBrowseView;
