import React from 'react';
import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from '../../components/globals/header/header';
const AddFaveFormView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
  },


  render() {
    const {index, lists, headerMore, fave} = this.props;
    console.log('INSTANTIATING ADD FAVE VIEW', this.props)
    return (
      <View style={styles.container}>
        {/*<AddFaveFormHeader />*/}
        <ScrollView>
          <Header title={'Add Fave'}/>
          <View>
            <View>
              <Image></Image>
            </View>
            <View>
              <Text>{'Site Text'}</Text>
              <Text></Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // height: 1000,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  },
});

export default AddFaveFormView;
