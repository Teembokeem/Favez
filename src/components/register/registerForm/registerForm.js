import React from 'react';
import {register} from '../../../services/auth';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput
} from 'react-native';
import {Field, reduxForm} from 'redux-form/immutable';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

const renderInput = ({input: {onChange, ...restInput}, ...props}) => {
  return <TextInput style={styles.LoginFormEmailInput} type={props.type} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={onChange} {...restInput}/>
};


const LoginForm = props => {
  const {handleSubmit, register} = props;

  const submit = values => {
    register(values.toJS());
  };

  return (
    <View style={styles.LoginFormContainer}>
      <View style={styles.LoginFormFieldEmailContainer}>
        <View style={styles.LoginFormEmailIconContainer}>
          <FAIcon style={styles.LoginFormEmailIcon} name='user'/>
        </View>
        <View style={styles.LoginFormEmailInputContainer}>
          <Text style={styles.LoginFormEmailLabel}>{'EMAIL'}</Text>
          <Field name='email' component={renderInput} type='email' placeholder='EMAIL OR PHONE NUMBER' style={styles.LoginFormEmailInput}/>
        </View>
      </View>
      <View style={styles.LoginFormFieldUsernameContainer}>
        <View style={styles.LoginFormUsernameIconContainer}>
          <Text style={styles.LoginFormUsernameText}>@</Text>
        </View>
        <View style={styles.LoginFormUsernameInputContainer}>
          <Text style={styles.LoginFormUsernameLabel}>{'PHONE'}</Text>
          <Field name='phone' component={renderInput} type='text' placeholder='PHONE' style={styles.LoginFormUsernameInput}/>
        </View>
      </View>
      <View style={styles.LoginFormFieldPasswordContainer}>
        <View style={styles.LoginFormPasswordIconContainer}>
          <Ionicon style={styles.LoginFormPasswordIcon} name='md-key'/>
        </View>
        <View style={styles.LoginFormPasswordInputContainer}>
          <Text style={styles.LoginFormPasswordLabel}>{'PASSWORD'}</Text>
          <Field name='password' component={renderInput} type='password' secureTextEntry={true} placeholder='PASSWORD' style={styles.LoginFormPasswordInput} secureTextEntry={true}/>
        </View>
      </View>
      <View style={styles.LoginFormFieldLocationContainer}>
        <View style={styles.LoginFormLocationInputContainer}>
          <Text style={styles.LoginFormLocationLabel}>{'LOCATION'}</Text>
          <Field name='location' component={renderInput} type='location' secureTextEntry={false} placeholder='Romania' style={styles.LoginFormLocationInput} secureTextEntry={true}/>
        </View>
        <View style={styles.LoginFormLocationIconContainer}>
          <Image style={styles.LoginFormLocationImage} />
        </View>
      </View>
      <View style={styles.LoginFormButtonContainer}>
        <TouchableOpacity
          onPress={handleSubmit(submit)}
          style={styles.LoginFormRegisterButton}>
          <Text
            style={styles.LoginFormButtonText}>
            {'BECOME A FAVER'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(submit)}
          style={styles.LoginFormFacebookButton}>
          <Text
            style={styles.LoginFormButtonText}>
            {'REGISTER WITH FACEBOOK'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginFormContainer: {
    width: 375,
    // paddingLeft: 10,
    // paddingRight: 10,
    flex: 1,
    borderBottomWidth: 0
  },
  LoginFormFieldEmailContainer: {
    flex: 1,
    maxHeight: 60,
    padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',
    alignItems: 'center'
  },
  LoginFormEmailIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginFormEmailIcon: {
    fontSize: 23,
    color: '#d8d8d8'
  },
  LoginFormEmailInputContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  LoginFormEmailLabel: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Hind-Bold'
  },
  LoginFormEmailInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Bold'
  },
  LoginFormFieldUsernameContainer: {
    flex: 1,
    maxHeight: 60,
    padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d8d8d8',
    alignItems: 'center'
  },
  LoginFormUsernameIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginFormUsernameText: {
    fontSize: 23,
    color: '#d8d8d8',
    fontFamily: 'Hind-Bold'
  },
  LoginFormUsernameInputContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  LoginFormUsernameLabel: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Hind-Bold'
  },
  LoginFormUsernameInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Regular'
  },
  LoginFormFieldPasswordContainer: {
    flex: 1,
    padding: 5,
    paddingBottom: 0,
    marginTop: 5,
    maxHeight: 60,
    flexDirection: 'row'
  },
  LoginFormPasswordIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginFormPasswordIcon: {
    fontSize: 23,
    color: '#d8d8d8'
  },
  LoginFormPasswordInputContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  LoginFormPasswordLabel: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Hind-Bold'
  },
  LoginFormPasswordInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Regular'
  },
  LoginFormFieldLocationContainer: {
    flex: 1,
    padding: 5,
    paddingBottom: 0,
    marginTop: 5,
    maxHeight: 60,
    flexDirection: 'row'
  },
  LoginFormLocationIconContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginFormLocationIcon: {
    fontSize: 23,
    color: '#d8d8d8'
  },
  LoginFormLocationInputContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  LoginFormLocationLabel: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Hind-Bold'
  },
  LoginFormLocationInput: {
    flex: 1,
    paddingTop: -10,
    fontFamily: 'Hind-Regular'
  },
  LoginFormButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginFormRegisterButton: {
    maxHeight: 45,
    minHeight: 45,
    flex: 1,
    // marginTop: 0,
    // borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#4caf4e',
    width: 300,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 3
  },
  LoginFormFacebookButton: {
    marginTop: 3,
    maxHeight: 45,
    minHeight: 45,
    flex: 1,
    // marginTop: 0,
    // borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#1b42ab',
    width: 300,
    borderRadius: 8,
    alignItems: 'center'
  },
  LoginFormButtonText: {
    // height: 50
    fontSize: 17,
    fontFamily: 'Hind-Bold',
    color: 'white'
  }

});

export default reduxForm({
  form: 'test'
})(LoginForm);
