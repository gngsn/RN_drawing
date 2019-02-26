import React from 'react';
import {View, TextInput, StyleSheet, Button, KeyboardAvoidingView, Platform} from 'react-native';

class ChatFooter extends React.Component {

    constructor(prop) {
        super(prop);

        this.state = {
            typing: '',
            message: [],
        }
    }

    sendMessage = () => {
        const newMessage = this.state.typing;
        this.setState({
            typing: '',
            message: this.state.message.concat([newMessage])
        })
    };

    render() {
        return (
            <View styles={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    keyboardVerticalOffset={80}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    enabled>
                    <TextInput
                        value={this.state.typing}
                        style={styles.input}
                        autoFocus={true}
                        underlineColorAndroid="transparent"
                        placeholder="Type something nice"
                        onChangeText={text => this.setState({typing: text})}/>

                    <Button style={styles.button}
                            title={'send'}
                            onPress={this.sendMessage}/>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: '#e0dde2',
        borderWidth: 3,
        borderRadius: 30,
        margin: 10
    },
    button: {
        height: 40,
    }
});

export default ChatFooter;