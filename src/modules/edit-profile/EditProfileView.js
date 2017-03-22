import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import * as FaveActions from '../../redux/fave/faveActions';
import * as ListActions from '../../redux/list/listActions';
import * as UIActions from '../../redux/ui/uiActions';
import Header from '../../components/globals/header/header';
import EditProfileHeader from '../../components/edit-profile/editProfileHeader/editProfileHeader';
import EditProfileForm from '../../components/edit-profile/editProfileForm/editProfileForm';

const window = Dimensions.get('window');

const EditProfileView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
  },

  submit(text) {
    const {fave, selectedRadio} = this.props;
    console.log('selected radio', selectedRadio, this.setMyList())
    Object.assign(fave, {
      name: fave.title,
      description: text,
      list_id: this.setMyList()[selectedRadio].id,
      type: 1
    });
    this.props.dispatch(FaveActions.createFave(fave)).then((something, somethingelse) => {
      console.log('TODO: fix this once, POST /favez is fixed', something, somethingelse);
      this.props.dispatch(ListActions.getMyLists()).then(Actions.feedIndex);
    });
  },

  render() {
    const {user} = this.props;
    const {favez, auth0} = user;
    console.log('edit profile props', this.props);
    return (
      <View style={styles.container}>
        <EditProfileHeader />
        <ScrollView>
          <Header title={'Edit Profile'}/>
          <View style={styles.EditProfileFormContainer}>
            <View style={styles.EditProfileImageChanger}>
              <TouchableOpacity>
                <Image style={styles.EditProfileImage} source={{uri: auth0.picture}}/>
              </TouchableOpacity>
              <Text style={styles.EditProfileImageText}>Tap to change profile picture</Text>
            </View>
            <EditProfileForm
              user={user}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center'
  },
  EditProfileImageChanger: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    paddingBottom: 13
  },
  EditProfileImage: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  EditProfileImageText: {
    paddingTop: 10,
    fontFamily: 'Hind-SemiBold',
    color: '#888888'
  }
});

export default EditProfileView;
