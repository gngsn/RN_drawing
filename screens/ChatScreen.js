import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import ChatFooter from '../components/ChatFooter';
import Messages from '../components/Messages';

export default class ChatScreen extends Component {

    newId = 2;

    constructor(props) {
        super(props);
    }

    state = {
        input: '',
        message: [
            {id: 0, text: 'hi!'},
            {id: 1, text: 'hello~!'}
        ],
    };

    changeText = (text) => {
        this.setState({
            input: text
        })
    };

    sendMessage = () => {
        const {input, message} = this.state;
        this.setState({
            input: '',
            message: message.concat({
                id: this.newId++,
                text: input
            })
        });
    };

    render() {
        const {
            input,
            message,
        } = this.state;

        const {
            changeText,
            sendMessage
        } = this;

        return (
            <View style={styles.container}>
                <View style={styles.message}>
                    <Messages messages={message}/>
                </View>
                <View>
                    <ChatFooter input={input} changeText={changeText} sendMessage={sendMessage}/>
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
        alignItems: 'flex-end'
    },
});

