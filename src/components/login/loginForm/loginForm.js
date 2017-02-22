import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {
  FieldsContainer,
  FieldSet,
  Form,
  ActionsContainer,
  Button
} from 'react-native-clean-form';
import {
  Input,
  Switch,
  Select
} from 'react-native-clean-form/redux-form-immutable'
import {Field, reduxForm} from 'redux-form/immutable'
import Ionicon from 'react-native-vector-icons/Ionicons';

const submit = values => {
  console.log('submitting form', values);
};

const renderInput = ({input: {onChange, ...restInput}}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
};


const LoginForm = props => {
  const {handleSubmit, submitting} = props;

  return (
    <Form style={styles.container}>
      <FieldsContainer>
        <FieldSet label='Email'>
          <Input name='email' placeholder='email' />
        </FieldSet>
        <FieldSet label='Password'>
          <Input name='password' placeholder='password' />
        </FieldSet>
      </FieldsContainer>
      <ActionsContainer>
        <Button
          onPress={handleSubmit(submit)}
          iconPlacement='left'
          submitting={submitting}>
          Authenticate
        </Button>
      </ActionsContainer>
    </Form>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
});

export default reduxForm({
  form: 'test'
})(LoginForm);
