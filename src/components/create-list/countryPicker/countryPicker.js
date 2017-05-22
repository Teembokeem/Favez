import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  Modal,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet,
  Picker
} from 'react-native';
const window = Dimensions.get('window');
const PICKER_WIDTH = window.width;
const PICKER_HEIGHT = window.height * 0.4;

function CountryPicker({onSelectCountry, selectedCountry, countries}) {

  return (
    <Picker style={styles.picker}
      selectedValue={selectedCountry}
      onValueChange={val => onSelectCountry(val)}>
      {countries.map((country, index) => {
        return (<Picker.Item label={country.name} value={country.code} key={index} />)
      })}
    </Picker>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: window.height,
    width: window.width
  },
  container: {
    backgroundColor: 'transparent',
    flex: 1,
    alignSelf: 'center',
    height: window.height,
    width: window.width,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  pickerContainer: {
    height: PICKER_HEIGHT,
    width: PICKER_WIDTH,
    borderTopWidth:0.5,
    borderTopColor: '#DDD',
    backgroundColor: '#FFF'
  },
  picker: {
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  }
});

export default CountryPicker;
