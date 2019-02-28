import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Messages extends Component {
    render() {
        const {messages} = this.props;
        const messageList = messages.map(
            ({id,text}) => (
                <View
                    key={id}
                    style={styles.bubble}>
                    <Text key={text.id} style={styles.text}>
                        {text}
                    </Text>
                </View>
            )
        );
        return (
            <View>
                {messageList}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: 'flex-end'
    },
    bubble: {
        backgroundColor : '#ffffff',
        borderRadius: 30,
        margin: 10,
        padding:10,
        // flexDirection: 'row',
        width : 200,
    },
    text: {
        textAlign: 'center',
        fontSize: 17,
    }
});