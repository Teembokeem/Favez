import React from 'react';
import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as FaveActions from '../../redux/fave/faveActions';
import AddCollaboratorsHeader from '../../components/add-collaborators/addCollaboratorsHeader/addCollaboratorsHeader';

const AddFaveBrowseView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  render() {
    const {lists} = this.props;
    return (
      <View style={styles.container}>
        <AddCollaboratorsHeader/>
        <View>
          <Text style={styles.Header}>Hello World</Text>
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
