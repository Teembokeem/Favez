import React, {PropTypes} from 'react';
import {
  NavigationExperimental,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import TabBar from '../../components/TabBar';
import FeedNavHeader from '../feed/feedNavHeader/FeedNavHeader';

// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 50;

const TabsView = React.createClass({
  propTypes: {
    onNavigateBack: PropTypes.func.isRequired,
  },
  // NavigationHeader accepts a prop style
  // NavigationHeader.title accepts a prop textStyle
  renderHeader(sceneProps) {
    console.log("your scene prioops", sceneProps);
      if (sceneProps.scene.index != 0) {
          return (
            <NavigationHeader
              {...sceneProps}
              style={styles.navigationHeader}
              onNavigateBack={this.props.onNavigateBack}
              renderTitleComponent={() => {
                console.log(sceneProps)
              }}
            />
          );
      } else {
        switch (sceneProps.scene.route.key) {
          case 'Feed':

            return (
              <FeedNavHeader>
              </FeedNavHeader>
            );
          case 'Favorite':

          default:
            return (
              <NavigationHeader
                {...sceneProps}
                style={styles.navigationHeader}
                onNavigateBack={this.props.onNavigateBack}
                renderTitleComponent={() => {
                  console.log(sceneProps)
                }}
              />
            );
          
        }
      
      }
  },
  renderScene(sceneProps) {
    // render scene and apply padding to cover
    // for app bar and navigation bar
    return (
      <View style={styles.sceneContainer}>
      </View>
    );
  },
  render() {
    return (
      <View style={styles.container}>
        <TabBar
          height={TAB_BAR_HEIGHT}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    marginBottom: TAB_BAR_HEIGHT
  }
});

export default TabsView;
