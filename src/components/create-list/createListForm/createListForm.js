import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
import {
  Button
} from 'react-native-clean-form';

import {Field, reduxForm} from 'redux-form/immutable';
import OIcon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';



const renderInput = ({input: {onChange, ...restInput}, ...props}) => {
  return <TextInput style={styles.CreateListFormEmailInput} type={props.type} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={onChange} {...restInput}/>
};


const CreateListForm = props => {
  const {handleSubmit, submitting, login} = props;

  const submit = values => {
    login(values.toJS())
  };

  return (
    <View style={styles.CreateListFormContainer}>
      <View style={styles.CreateListFormFieldEmailContainer}>
        <View style={styles.CreateListFormEmailIconContainer}>
          <OIcon style={styles.CreateListFormEmailIcon} name='list-unordered'/>
        </View>
        <View style={styles.CreateListFormEmailInputContainer}>
          <Text style={styles.CreateListFormEmailLabel}>{'LIST TITLE'}</Text>
          <Field name='listName' component={renderInput} type='text' placeholder='List Title' style={styles.CreateListFormEmailInput}/>
        </View>
      </View>
      <View style={styles.CreateListFormFieldCollaboratorContainer}>
        <View style={styles.CreateListFormCollaboratorInputContainer}>
          <Text style={styles.CreateListFormCollaboratorLabel}>{'Collaborators'}</Text>
        </View>
        <View style={styles.CreateListFormCollaboratorIconContainer}>
          <Ionicon style={styles.CreateListFormCollaboratorIcon} name='md-arrow-round-forward'/>
        </View>
      </View>
      <View style={styles.CreateListFormFieldLocationContainer}>
        <View style={styles.CreateListFormLocationInputContainer}>
          <Text style={styles.CreateListFormLocationLabel}>{'LOCATION'}</Text>
          <Field name='Location' component={renderInput} type='text' placeholder='Your Location' style={styles.CreateListFormLocationInput} secureTextEntry={true}/>
        </View>
        <View style={styles.CreateListFormLocationIconContainer}>
          <Ionicon style={styles.CreateListFormLocationIcon} name='md-key'/>
        </View>
      </View>
      <View style={styles.LoginButtonContainer}>
        <Button
          onPress={handleSubmit(submit)}
          iconPlacement='left'
          submitting={submitting}
          style={styles.CreateListFormButton}>
          {'Authenticate'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CreateListFormContainer: {
    width: 375,
    // paddingLeft: 10,
    // paddingRight: 10,
    flex: 1,
    borderBottomWidth: 0
  },
  CreateListFormFieldEmailContainer: {
    flex: 1,
    maxHeight: 60,
    padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',
    alignItems: 'center'
  },
  CreateListFormEmailIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CreateListFormEmailIcon: {
    fontSize: 23,
    color: '#7f7f7f'
  },
  CreateListFormEmailInputContainer: {
    flex: 1,
    height: 50,
    flexDirection: 'column'
  },
  CreateListFormEmailLabel: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Hind-Bold',
    color: '#7f7f7f'
  },
  CreateListFormEmailInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Regular'
  },
  CreateListFormFieldCollaboratorContainer: {
    flex: 1,
    maxHeight: 60,
    padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',
    alignItems: 'center'
  },
  CreateListFormCollaboratorIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CreateListFormCollaboratorIcon: {
    fontSize: 23,
    color: '#7f7f7f'
  },
  CreateListFormCollaboratorInputContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 12
  },
  CreateListFormCollaboratorLabel: {
    // flex: 1,
    fontSize: 18,
    fontFamily: 'Hind-Medium',
    justifyContent: 'center'
    // color: '/'
  },
  CreateListFormCollaboratorInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Regular'
  },
  CreateListFormFieldLocationContainer: {
    flex: 1,
    padding: 5,
    paddingBottom: 0,
    marginTop: 5,
    maxHeight: 60,
    flexDirection: 'row'
  },
  CreateListFormLocationIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CreateListFormLocationIcon: {
    fontSize: 23,
    color: '#d8d8d8'
  },
  CreateListFormLocationInputContainer: {
    paddingLeft: 12,
    height: 50,
    flex: 1,
    flexDirection: 'column'
  },
  CreateListFormLocationLabel: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Hind-Bold',
    color: '#7f7f7f'
  },
  CreateListFormLocationInput: {
    flex: 1,
    // paddingTop: -10,
    fontFamily: 'Hind-Regular'
  },
  CreateListFormButtonContainer: {
    flex: 1
  },
  CreateListFormButton: {
    width: 320,
    flex: 1,
    borderRadius: 20,
    alignSelf: 'center'
  }

});

export default reduxForm({
  form: 'createList'
})(CreateListForm);
