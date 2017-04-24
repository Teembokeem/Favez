import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const AddFaveBrowseView = React.createClass({

  componentWillMount() {
  },

  render() {
    const {} = this.props;
    return (
        <View style={styles.CollaboratorContainer}>
          <View
            style={styles.CollaboratorImageContainer}
          >
            <Image style={styles.CollaboratorImage}/>
          </View>
          <View
            style={styles.CollaboratorInfoContainer}
          >
            <View style={styles.CollaboratorInfoNameContainer}>
              <Text style={styles.CollaboratorInfoName}>@{'Pewdiepie'}</Text>
              {/*<Text style={styles.CollaboratorInfoNameIcon}>Star</Text>*/}
            </View>
            <View style={styles.CollaboratorInfoTagContainer}>
              <Text style={styles.CollaboratorInfoTag}>PewdiePie Official</Text>
            </View>
          </View>
          <View style={styles.CollaboratorDeleteContainer}>
            <MCIcon style={styles.CollaboratorDeleteIcon} name='delete'/>
          </View>
        </View>
    );
  }
});

const styles = StyleSheet.create({
  CollaboratorContainer: {
    flex: 1,
    paddingLeft: 18,
    alignItems: 'center',
    paddingRight: 18,
    backgroundColor: 'white',
    flexDirection: 'row',
    maxHeight: 70
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
    color: '#0076ff',
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
  }
});

export default AddFaveBrowseView;
