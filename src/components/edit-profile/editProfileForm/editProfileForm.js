import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Switch,
  // Dimensions,
  TextInput
} from 'react-native';
import {
  Button
} from 'react-native-clean-form';

import {Field, reduxForm} from 'redux-form/immutable';
import OIcon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';

const window = Dimensions.get('window');


const renderInput = ({input: {onChange, ...restInput}, ...props}) => {
  return <TextInput style={styles.EditProfileFormInput} type={props.type} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={onChange} {...restInput}/>
};


const fieldSerials = [
  {
    prop: 'name',
    header: 'name',
    iconSet: 'Ionicon',
    iconId: 'md-person'
  },
  {
    prop: 'nickname',
    header: 'username',
    iconSet: 'MC',
    iconId: 'at'
  },
  {
    prop: 'site',
    header: 'site',
    iconSet: 'MI',
    iconId: 'web'
  },
  {
    prop: 'description',
    header: 'description',
    iconSet: 'FA',
    iconId: 'list-alt'
  },
  {
    prop: 'email',
    header: 'email',
    iconSet: 'Ionicon',
    iconId: 'md-mail'
  },
  {
    prop: 'phone',
    header: 'phone number',
    iconSet: 'MC',
    iconId: 'cellphone-iphone'
  },
  {
    prop: 'gender',
    header: 'gender',
    iconSet: 'MC',
    iconId: 'human-male-female'
  },
];
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
function renderFields(user) {
  const {favez, auth0} = user;
  return fieldSerials.map((field, idx) => {
    const {header, iconSet, iconId, prop} = field;
    return (
      <View key={'field ' + idx} style={styles.EditProfileFieldContainer}>
        <View style={styles.EditProfileIconContainer}>
          {renderIcon(iconSet, iconId)}
        </View>
        <View style={styles.EditProfileInputContainer}>
          <Text style={styles.EditProfileInputHeader}>{header.toUpperCase()}</Text>
          <Field name={prop} component={renderInput} type='text' placeholder='fda' style={styles.EditProfileFormField}/>
        </View>
      </View>
    );
  }
);}


const EditProfileForm = props => {
  const {handleSubmit, submitting, createList, user} = props;
  const fields = renderFields(user);
  const submit = values => {
    createList(values);
  };

  console.log('hello ', props)
  return (
    <View style={styles.EditProfileFormContainer}>
      {fields}
      <TouchableOpacity
        onPress={handleSubmit(submit)}
        submitting={submitting}
        style={styles.CreateListButton}
      >
        <View
          style={styles.CreateListButtonTextContainer}
        >
          <Text style={styles.CreateListButtonText}>CREATE LIST</Text>
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
    // paddingTop: 3,
    flex: 2
  },
  CreateListButton: {
    // flex: 1,
    // position: 'absolute',
    bottom: 0,
    height: 50,
    width: window.height,
    backgroundColor: '#4caf4e',
    // alignItems: 'center',
    // alignItems: 'flex-start',
    // justifyContent: 'center'
  },
  CreateListButtonTextContainer: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  CreateListButtonText: {
    fontFamily: 'Hind-Bold',
    fontSize: 19,
    color: 'white'
  }
});

export default reduxForm({
  form: 'createList'
})(EditProfileForm);
