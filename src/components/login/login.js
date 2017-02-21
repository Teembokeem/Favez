import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {Field, reduxForm} from 'redux-form/immutable'
import Ionicon from 'react-native-vector-icons/Ionicons';

const submit = values => {
  console.log('submitting form', values)
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}


const Form = props => {
  const {handleSubmit} = props

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <Field name="email" component={renderInput} />
      <Text>Email:</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})(Form)
