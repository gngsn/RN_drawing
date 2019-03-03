import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';


export default class Messages extends Component {
    footerY;

    constructor(props) {
        super(props);
    };

    state = {
        bubbleSize : '60%'
    };

    scrollToBottom = () => {
        this.refs._scrollView.scrollTo(footerY);
    };

    changeContentSize = (contentWidth, contentHeight) => {
        this.scrollView.scrollToEnd({animated: true});
    };

    render() {
        const {messages} = this.props;
        const messageList = messages.map(
            ({id, text}) => (
                <View
                    key={id}
                    style={[styles.bubble]}>
                    <Text key={text.id} style={[styles.text]}>
                        {text}
                    </Text>
                </View>
            )
        );


        return (
            <ScrollView
                ref={ref => this.scrollView = ref}
                onContentSizeChange={this.changeContentSize}
                onPress={this.scrollToBottom}>
                <View onLayout={(e) => {
                    this.footerY = e.nativeEvent.layout.y;
                }}/>
                {messageList}
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    bubble: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
        margin: 10,
        padding: 13
    },
    text: {
        justifyContent: 'flex-end',
        textAlign: 'center',
        fontSize: 17,
    }
});