import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  Switch,
  // Dimensions,
  TextInput
} from 'react-native';
import {
  Button
} from 'react-native-clean-form';

import * as Utils from '../../../utils/Utils';

import {Field, reduxForm} from 'redux-form/immutable';
import OIcon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';

import CountryPicker from '../../globals/pickers/countryPicker/countryPicker';

const window = Dimensions.get('window');

const renderInput = ({input: {onChange, ...restInput}, ...props}) => {
  return <TextInput style={styles.CreateListFormEmailInput} type={props.type} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={onChange} {...restInput}/>
};

const CreateListForm = props => {
  const {handleSubmit, submitting, createList, toggleOption, options, collaborators, location, countryPicker, dataValid} = props;
  const {priv, nsfw} = options;
  const {countries, onChangeCountry, countryPickerVisibility, openCountryPicker, closeCountryPicker} = countryPicker;
  const submit = values => {
    createList(values.toJS());
  };
  let value = false;

  return (
    <View style={styles.CreateListFormContainer}>
      <View style={styles.CreateListFormFieldEmailContainer}>
        <View style={styles.CreateListFormEmailIconContainer}>
          <OIcon style={styles.CreateListFormEmailIcon} name='list-unordered'/>
        </View>
        <View style={styles.CreateListFormEmailInputContainer}>
          <Text style={styles.CreateListFormEmailLabel}>{'LIST TITLE'}</Text>
          <Field name='name' component={renderInput} type='text' placeholder='List Title' style={styles.CreateListFormEmailInput}/>
        </View>
      </View>
      <TouchableOpacity
        style={styles.CreateListFormFieldCollaboratorContainer}
        onPress={Actions.addCollaborators}
      >
        <View style={styles.CreateListFormCollaboratorInputContainer}>
          <Text style={styles.CreateListFormCollaboratorLabel}>{'Collaborators'}</Text>
        </View>
        <View style={styles.CreateListFormCollaboratorIconContainer}>
          <Text style={styles.CreateListFormCollaboratorNumber}>{collaborators.length > 0 ? ' ' + collaborators.length : ''}</Text>
          <Ionicon style={styles.CreateListFormCollaboratorIcon} name='md-arrow-round-forward'/>
        </View>
      </TouchableOpacity>
      <View style={styles.CreateListFormFieldLocationContainer}>
        <View style={styles.CreateListFormLocationInputContainer}>
          <Text style={styles.CreateListFormLocationLabel}>{'LOCATION'}</Text>
          {(Platform.OS == 'ios')? (
            <Text onPress={() => openCountryPicker()} style={styles.CreateListFormLocationInput}>
              {location ? Utils.getCountryByCode(location, countries):'Select Location'}
            </Text>
          ): null}
          <CountryPicker
            style={styles.CreateListFormLocationInput}
            countries={countries}
            onChangeCountry={onChangeCountry}
            selectedCountry={location}
            visible={countryPickerVisibility}
            open={openCountryPicker}
            close={closeCountryPicker} />

        </View>
        <View style={styles.CreateListFormLocationIconContainer}>
          <SLIcon style={styles.CreateListFormLocationIcon} name='globe'/>
        </View>
      </View>
      <View style={styles.CreateListFormFieldPrivateContainer}>
        <View style={styles.CreateListFormPrivateInputContainer}>
          <Text style={styles.CreateListFormPrivateLabel}>{'Private'}</Text>
        </View>
        <View style={styles.CreateListFormPrivateIconContainer}>
          <Switch
            onValueChange={() => toggleOption('priv', !priv)}
            style={{marginBottom: 10}}
            value={priv}
          />
        </View>
      </View>
      <View style={styles.CreateListFormFieldPrivateContainer}>
        <View style={styles.CreateListFormPrivateInputContainer}>
          <Text style={styles.CreateListFormPrivateLabel}>{'NSFW'}</Text>
        </View>
        <View style={styles.CreateListFormPrivateIconContainer}>
          <Switch
            onValueChange={() => toggleOption('nsfw', !nsfw)}
            style={{marginBottom: 10}}
            value={nsfw}
          />
        </View>
      </View>
      <View style={styles.CreateListFormFieldOptionsContainer}>
        <TouchableOpacity
          style={styles.CreateListFormOptionsInputContainer}
          onPress={Actions.moreOptions}
        >
          <Text style={styles.CreateListFormOptionsLabel}>{'More Options'}</Text>
        </TouchableOpacity>
        <View style={styles.CreateListFormOptionsIconContainer}>
          <Ionicon style={styles.CreateListFormCollaboratorIcon} name='md-arrow-round-forward'/>
        </View>
      </View>
      <TouchableOpacity
        onPress={dataValid ? handleSubmit(submit) : null}
        submitting={submitting}
        activeOpacity={dataValid?0.2:1}
        style={[styles.CreateListButton, dataValid ? null : styles.ButtonDisable]}
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
    // padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',
    alignItems: 'center'
  },
  CreateListFormCollaboratorIconContainer: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  CreateListFormCollaboratorIcon: {
    fontSize: 23,
    color: '#cccccc'
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
  CreateListFormCollaboratorNumber: {
    paddingRight: 15,
    fontSize: 18,
    color: '#cccccc',
    fontFamily: 'Hind-Bold'
  },
  CreateListFormFieldLocationContainer: {
    flex: 1,
    // padding: 5,
    paddingTop: 0,
    paddingBottom: 0,
    // marginTop: 5,
    maxHeight: 60,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',

  },
  CreateListFormLocationIconContainer: {
    // width: 50,
    paddingRight: 14,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1
  },
  CreateListFormLocationIcon: {
    fontSize: 22,
    // paddingLeft: 5,
    // width: 65,
    // height: 65,
    color: '#81dde2'

  },
  CreateListFormLocationInputContainer: {
    marginTop: 5,
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
  CreateListFormFieldPrivateContainer: {
    flex: 1,
    maxHeight: 60,
    // padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',
    alignItems: 'center'
  },
  CreateListFormPrivateIconContainer: {
    width: 50,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CreateListFormPrivateIcon: {
    fontSize: 23,
    color: '#7f7f7f'
  },
  CreateListFormPrivateInputContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 12
  },
  CreateListFormPrivateLabel: {
    // flex: 1,
    fontSize: 18,
    fontFamily: 'Hind-Medium',
    justifyContent: 'center'
    // color: '/'
  },
  CreateListFormPrivateInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Regular'
  },
  CreateListFormFieldOptionsContainer: {
    flex: 1,
    maxHeight: 60,
    // padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',
    alignItems: 'center'
  },
  CreateListFormOptionsIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CreateListFormOptionsIcon: {
    fontSize: 23,
    color: '#7f7f7f'
  },
  CreateListFormOptionsInputContainer: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    paddingLeft: 12
  },
  CreateListFormOptionsLabel: {
    // flex: 1,
    fontSize: 18,
    fontFamily: 'Hind-Medium',
    justifyContent: 'center'
    // color: '/'
  },
  CreateListFormOptionsInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Regular'
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
  ButtonDisable: {
    backgroundColor: '#8bcb8c'
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
  form: 'createList',
})(CreateListForm);
