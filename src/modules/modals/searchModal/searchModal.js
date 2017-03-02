import React from 'react';
import {View, Text, StyleSheet, Button, Animated, Dimensions} from "react-native";
import {Actions} from "react-native-router-flux";

var {
  height: deviceHeight
} = Dimensions.get("window");

var styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor:"transparent",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default class extends React.Component {
    constructor(props){
        super (props);

        this.state = {
            offset: new Animated.Value(-deviceHeight)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: 0
        }).start();
    }

    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 150,
            toValue: -deviceHeight
        }).start(Actions.pop);
    }

    render(){
        console.log(this)
        return (
            <Animated.View style={styles.container}>
                <View style={{  flex: 1,  
                                alignSelf: 'stretch',
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor:"white" }}>
                    <Text>{this.props.data}</Text>
                    <Button onPress={this.closeModal.bind(this)} title='close'>Close</Button>
                </View>
            </Animated.View>
        );
    }
}
