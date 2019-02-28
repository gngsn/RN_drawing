import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';

import ChatFooter from '../components/ChatFooter';
import Messages from '../components/Messages';

export default class ChatScreen extends Component {

    newId = 2;

    constructor(props){
        super(props);
        this.contentHeight = null;
        this.scrollHeight = null;
        this.scrollY = null;
    }

    state = {
        input: '',
        message: [
            {id: 0, text: 'hi!'},
            {id: 1, text: 'hello~!'}
        ]
    };

    handleScroll=(e)=>{
        this.scrollY = e.nativeEvent.contentOffset.y
    };

    handleLayout =(e)=>{
        this.scrollHeight = e.nativeEvent.layout.height
    };

    scrollToBottom=()=> {
        const { scrollHeight, contentHeight } = this;
        // if (scrollHeight == null) {
        //     return
        // }
        if (contentHeight > scrollHeight) {
            this.refs.scroller.scrollTo({ y: 0 })
        }
    };

    changeText = (text) => {
        this.setState({
            input: text
        })
    };

    sendMessage = () => {
        const {input, message} = this.state;
        console.log(message);
        this.setState({
            input: '',
            message: message.concat({
                id: this.newId++,
                text: input
            })
        });
        this.scrollToBottom();
    };

    render() {
        const {
            input,
            message
        } = this.state;

        const {
            changeText,
            sendMessage
        } =this;
        // console.log('ChatScreen' + input);

        return (
            <View style={styles.container}>
                <ScrollView
                    onScroll={this.handleScroll}
                    onLayout={this.handleLayout}
                    style={styles.message}>
                    <Messages messages={message}/>
                </ScrollView>
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
    },
});

