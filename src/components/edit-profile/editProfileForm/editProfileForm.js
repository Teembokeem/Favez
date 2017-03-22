import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput
} from 'react-native';
import {Field, reduxForm} from 'redux-form/immutable';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
// import {
//   Button
// } from 'react-native-clean-form';

const window = Dimensions.get('window');

const renderInput = ({input: {onChange, ...restInput}, ...props}) => {
  return <TextInput style={styles.EditProfileFormInput} type={props.type} placeholderTextColor={props.propsExist ? '#000000' : '#b8b8b8'} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={onChange} {...restInput}/>;
};

function renderIcon(set, id) {
  switch (set) {
    case 'Ionicon':
      return (<Ionicon style={styles.EditProfileFormIcon} name={id}/>);
    case 'MC':
      return (<MCIcon style={styles.EditProfileFormIcon} name={id}/>);
    case 'MI':
      return (<MIcon style={styles.EditProfileFormIcon} name={id}/>);
    case 'FA':
      return (<FAIcon style={styles.EditProfileFormIcon} name={id}/>);
    default:
      return null;
  }
}
function renderFields(user, serials) {
  const {favez, auth0} = user;
  return serials.map((field, idx) => {
    const {header, iconSet, iconId, prop, updateSpecial} = field;
    return (
      <View key={'field ' + idx} style={styles.EditProfileFieldContainer}>
        <View style={styles.EditProfileIconContainer}>
          {renderIcon(iconSet, iconId)}
        </View>
        <View style={styles.EditProfileInputContainer}>
          <Text style={styles.EditProfileInputHeader}>{header.toUpperCase()}</Text>
          <Field name={prop} component={renderInput} type='text' propsExist={favez[prop] ? true : false} updateSpecial={updateSpecial} placeholder={favez[prop] ? favez[prop] : header.charAt(0).toUpperCase() + header.slice(1)} style={styles.EditProfileFormField}/>
        </View>
      </View>
    );
  }
);}


const EditProfileForm = props => {
  const {handleSubmit, submitting, editProfile, user, fieldSerials} = props;
  const fields = renderFields(user, fieldSerials);
  const submit = values => {
    editProfile(values);
  };

  console.log('hello ', props);
  return (
    <View style={styles.EditProfileFormContainer}>
      {fields}
      <TouchableOpacity
        onPress={handleSubmit(submit)}
        submitting={submitting}
        style={styles.EditProfileButton}
      >
        <View
          style={styles.EditProfileButtonTextContainer}
        >
          <Text style={styles.EditProfileButtonText}>EDIT PROFILE</Text>
        </View>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  EditProfileFormContainer: {
    width: 375,
    // paddingLeft: 10,
    // paddingRight: 10,
    flex: 1,
    borderBottomWidth: 0
  },
  EditProfileFieldContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    padding: 17,
    paddingLeft: 0,
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: '#d8d8d8'
  },
  EditProfileIconContainer: {
    flex: 1,
    height: 60,
    // width: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  EditProfileFormIcon: {
    fontSize: 25,
    color: '#bbbbbb'
  },
  EditProfileInputContainer: {
    flex: 6,
    height: 60,
    flexDirection: 'column',
    padding: 0,
    justifyContent: 'flex-start',
    paddingTop: 7
  },
  EditProfileInputHeader: {
    fontSize: 13,
    fontFamily: 'Hind-Bold',
    color: '#bbbbbb',
    flex: 1
  },
  EditProfileFormInput: {
    fontSize: 16,
    fontFamily: 'Hind-Medium',
    flex: 2
  },
  EditProfileButton: {
    bottom: 0,
    height: 50,
    width: window.height,
    backgroundColor: '#4caf4e'
  },
  EditProfileButtonTextContainer: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  EditProfileButtonText: {
    fontFamily: 'Hind-Bold',
    fontSize: 19,
    color: 'white'
  }
});

export default reduxForm({
  form: 'editProfile'
})(EditProfileForm);
