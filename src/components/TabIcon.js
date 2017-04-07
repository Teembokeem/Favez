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
      return (
        <EIcon style={styles.Icon} name={display}/>
      );
    case 'share':
      return (
        <EIcon style={styles.share} name={display}/>
      );
    case 'bookmark-plus-outline':
      return (
        <MCIcon style={styles.bookmark} name={display}/>
      );
    case 'comment-text-outline':
      return (
        <MCIcon style={styles.comment} name={display}/>
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
    fontSize: 25
  },
  bookmark: {
    fontSize: 30,
    color: '#a8a8a8'
  },
  comment: {
    fontSize: 25,
    color: '#a8a8a8'
  },
  share: {
    fontSize: 25,
    color: '#a8a8a8'
  }
})

export default TabIcon;
