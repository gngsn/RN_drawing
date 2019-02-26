import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import ChatFooter from '../components/ChatFooter';

export default class ChatScreen extends Component {
    state = {
        typing: '',
        message: [],
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.message}>
                    <Text>
                        이것은 채팅.
                    </Text>
                </View>
                {/*<View style={styles.footer}>*/}
                <View>
                    <ChatFooter/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    message: {
        flex: 1,
        backgroundColor: '#ebeced',
    },
    footer: {
        flex: 0.2,
        flexDirection :'row',
        alignItems: 'flex-end',
        justifyContent : 'center',
        backgroundColor: 'white',
    }
});

