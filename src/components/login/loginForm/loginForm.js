import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {
  Button
} from 'react-native-clean-form';

import {Field, reduxForm} from 'redux-form/immutable';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';



const renderInput = ({input: {onChange, ...restInput}, ...props}) => {
  return <TextInput style={styles.LoginFormEmailInput} type={props.type} secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} onChangeText={onChange} {...restInput}/>;
};


const LoginForm = props => {
  const {handleSubmit, submitting, login} = props;

  const submit = values => {
    login(values.toJS());
  };

  return (
    <View style={styles.LoginFormContainer}>
      <View style={styles.LoginFormFieldEmailContainer}>
        <View style={styles.LoginFormEmailIconContainer}>
          <FAIcon style={styles.LoginFormEmailIcon} name='user'/>
        </View>
        <View style={styles.LoginFormEmailInputContainer}>
          <Text style={styles.LoginFormEmailLabel}>{'EMAIL'}</Text>
          <Field name='email' component={renderInput} type='email' placeholder='EMAIL' style={styles.LoginFormEmailInput}/>
        </View>
      </View>
      <View style={styles.LoginFormFieldPasswordContainer}>
        <View style={styles.LoginFormPasswordIconContainer}>
          <Ionicon style={styles.LoginFormPasswordIcon} name='md-key'/>
        </View>
        <View style={styles.LoginFormPasswordInputContainer}>
          <Text style={styles.LoginFormPasswordLabel}>{'PASSWORD'}</Text>
          <Field name='password' component={renderInput} type='password' placeholder='PASSWORD' style={styles.LoginFormPasswordInput} secureTextEntry={true}/>
        </View>
      </View>
      <View style={styles.LoginFormButtonContainer}>
        <TouchableOpacity
          onPress={handleSubmit(submit)}
          submitting={submitting}
          style={styles.LoginFormButton}>
          <Text style={styles.LoginFormButtonText}>ENTER FAVEZ</Text>
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
    maxHeight: 70,
    padding: 5,
    paddingBottom: 0,
    flexDirection: 'row',
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
    fontFamily: 'Hind-Regular'
  },
  LoginFormFieldPasswordContainer: {
    flex: 1,
    padding: 5,
    paddingBottom: 0,
    marginTop: 5,
    maxHeight: 70,
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
    fontFamily: 'Hind-Regular'
  },
  LoginFormButtonContainer: {
    flex: 1,
    marginTop: 15
  },
  LoginFormButton: {
    width: 320,
    backgroundColor: '#4caf4e',
    borderRadius: 15,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  LoginFormButtonText: {
    fontSize: 20,
    fontFamily: 'Hind-Bold',
    color: 'white'
  }

});

export default reduxForm({
  form: 'login'
})(LoginForm);
