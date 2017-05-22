import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  Modal,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet,
  Picker,
  Platform
} from 'react-native';
const window = Dimensions.get('window');
const PICKER_WIDTH = window.width;
const PICKER_HEIGHT = window.height * 0.3;

function CountryPicker({onChangeCountry, selectedCountry, countries, visible, open, close}) {

  return (Platform.OS == 'ios') ? (
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={visible}
        style={styles.countryPickerModal}>
          <View style={styles.container}>
            <View style={styles.pickerContainer}>
              <Picker style={styles.picker}
                selectedValue={selectedCountry}
                onValueChange={val => onChangeCountry(val)}>

                {countries.map((country, index) => {
                  return (<Picker.Item label={country.name} value={country.code} key={index} />)
                })}
              </Picker>
            </View>
          </View>
        </Modal>
    ): (
      <Picker style={styles.picker}
        selectedValue={selectedCountry}
        onValueChange={val => onChangeCountry(val)}>
        {countries.map((country, index) => {
          return (<Picker.Item label={country.name} value={country.code} key={index} />)
        })}
      </Picker>
    )
}

const styles = StyleSheet.create({

  countryPickerModal: {
    backgroundColor: 'transparent'
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
  }
});

export default CountryPicker;
