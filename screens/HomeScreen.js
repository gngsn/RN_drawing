import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {WebBrowser} from 'expo';

import {createStackNavigator, createAppContainer, StackNavigator} from 'react-navigation';


export default class HomeScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>DRAWING</Text>
                <Text style={styles.instructions}> my drawing app! </Text>
                <Button
                    title="Go to Chatting"
                    onPress={() => {
                        this.props.navigation.navigate('Chat')
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
