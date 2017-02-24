import React, {
  PropTypes,
} from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import OIcon from 'react-native-vector-icons/Octicons';

const propTypes = {
  // selected: PropTypes.bool,
  // title: PropTypes.string,
};

function renderIcon(display) {
  switch (display) {
    case 'featured-play-list':
      return (
        <MIcon style={styles.Icon} name={display}/>
      );
    case 'bell':
    case 'search':
      return (
        <OIcon style={styles.Icon} name={display}/>
      );
    case 'ios-heart':
      return (
        <Ionicon style={styles.Icon} name={display} />
      );
    case 'emoji-happy':
    case 'share':
      return (
        <EIcon style={styles.Icon} name={display}/>
      );
    case 'bookmark-plus-outline':
    case 'message-text':
      return (
        <MCIcon style={styles.Icon} name={display}/>
      );
  }

}

const TabIcon = (props) => (
  <Text
    style={{ color: props.selected ? 'red' : 'black' }}
  >
  
    {renderIcon(props.display)}
  </Text>
);

TabIcon.propTypes = propTypes;

const styles = StyleSheet.create({
  Icon: {
    fontSize: 22
  }
})

export default TabIcon;
