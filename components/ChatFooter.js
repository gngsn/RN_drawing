import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Button,
    KeyboardAvoidingView,
    Platform,
    Animated,
    Keyboard,
    Alert,
} from 'react-native';

class ChatFooter extends React.Component {

    constructor(prop) {
        super(prop);
        this.keyboardHeight = new Animated.Value(0);
    }

    componentWillMount () {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: event.endCoordinates.height-48,
            }),
        ]).start();
    };

    keyboardWillHide = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: 0,
            })
        ]).start();
    };


    render() {
        const { input, sendMessage, changeText } = this.props;
        return (
            <View styles={styles.container}>
                <Animated.View style={{ paddingBottom: this.keyboardHeight }}>
                    <View style={styles.margin}>
                    <TextInput
                        value={input}
                        style={styles.input}
                        autoFocus={true}
                        underlineColorAndroid="transparent"
                        placeholder="Type something nice"
                        onChangeText={(text)=>{changeText(text)}}/>
                    <Button style={styles.button}
                            title={'send'}
                            onPress={()=>{
                                sendMessage();
                            }}/>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    margin: {
        borderColor: '#e0dde2',
        borderWidth: 1,
        borderRadius: 30,
        margin: 10,
        flexDirection: 'row',
    },
    input: {
        margin: 8,
        width: 270
    },
    button: {
        justifyContent: 'flex-end',
    }
});

export default ChatFooter;