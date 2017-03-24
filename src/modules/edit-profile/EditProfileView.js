import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as FaveActions from '../../redux/fave/faveActions';
import * as ListActions from '../../redux/list/listActions';
import * as UserActions from '../../redux/user/userActions';
import Header from '../../components/globals/header/header';
import EditProfileHeader from '../../components/edit-profile/editProfileHeader/editProfileHeader';
import EditProfileForm from '../../components/edit-profile/editProfileForm/editProfileForm';

const EditProfileView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },
  fieldSerials: [
    {
      prop: 'displayname',
      updateSpecial: false,
      header: 'name',
      iconSet: 'Ionicon',
      iconId: 'md-person'
    },
    {
      prop: 'username',
      updateSpecial: true,
      auth0: 'nickname',
      header: 'username',
      iconSet: 'MC',
      iconId: 'at'
    },
    {
      prop: 'website',
      updateSpecial: false,
      header: 'your site',
      iconSet: 'MI',
      iconId: 'web'
    },
    {
      prop: 'profile',
      updateSpecial: false,
      header: 'description',
      iconSet: 'FA',
      iconId: 'list-alt'
    },
    {
      prop: 'email',
      updateSpecial: true,
      auth0: 'email',
      header: 'email',
      iconSet: 'Ionicon',
      iconId: 'md-mail'
    },
    {
      prop: 'phone',
      updateSpecial: false,
      header: 'phone number',
      iconSet: 'MC',
      iconId: 'cellphone-iphone'
    },
    {
      prop: 'gender',
      updateSpecial: false,
      header: 'gender',
      iconSet: 'MC',
      iconId: 'human-male-female'
    }
  ],
  submit(text) {
    const {fave, selectedRadio} = this.props;
    Object.assign(fave, {
      name: fave.title,
      description: text,
      list_id: this.setMyList()[selectedRadio].id,
      type: 1
    });
    this.props.dispatch(FaveActions.createFave(fave)).then((something, somethingelse) => {
      this.props.dispatch(ListActions.getMyLists()).then(Actions.feedIndex);
    });
  },
  editProfile(vals) {
    this.props.dispatch((UserActions.update(vals)))
  },

  render() {
    const {user} = this.props;
    const {auth0} = user;
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
              fieldSerials={this.fieldSerials}
              editProfile={this.editProfile}
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
