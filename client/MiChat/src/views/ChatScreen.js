import React, {Component} from 'react'
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    TextInput,
    Platform
} from 'react-native'
import Colors from '../config/Colors'
import dismissKeyboard from 'dismissKeyboard'
import API from '../api/Api'

class ChatScreen extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            messageList: [{user : 'karan', message: 'hey man sup'}, {user : 'guneet', message: 'just chilling man. wbu'}],
            message: '',
            dataSource: ds.cloneWithRows([]),
        };
        this.api = API.create();
    }

    componentWillMount() {
        this.api.getMessages().then(this.setChatMessages.bind(this));
    }

    setChatMessages(messages) {
        var json = JSON.parse(messages.data.data);
        this.setState({
            messageList: json,
            dataSource: this.state.dataSource.cloneWithRows(this.state.messageList)
        })
    }

    onSendPress() {
        this.setState({
            messageList : [...this.state.messageList, {user: 'karan', message: this.state.message}],
            message: ''
        });
        dismissKeyboard();
       // this.api.sendMessage("dd", "test").then(console.log(response));
    }

    render() {
        var list = this.state.messageList.map((item, index) => {
            return (
                <View
                    style={styles.messageContainer}
                    key={index}
                >
                    {item.user != null &&
                    <Text>
                        <Text style={styles.name}>{item.user}: </Text>
                        <Text style={styles.message}>{item.message}</Text>
                    </Text>
                    }
                </View>
            );
        });

        return (
            <View style={styles.container}>
                <View style={styles.chatContainer}>
                    <ScrollView
                        ref={(c) => this._scrollView = c}
                        onScroll={()=>{}}
                        scrollEventThrottle={16}
                        onContentSizeChange={(e) => {}}
                    >
                        {list}
                    </ScrollView>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.textContainer}>
                        <TextInput
                            style={styles.input}
                            value={this.state.message}
                            onChangeText={(text) => this.setState({message: text})}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight
                            underlayColor={'#4e4273'}
                            style={styles.button}
                            onPress={() => this.onSendPress()}
                        >
                            <Text style={styles.sendLabel}>SEND</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        marginTop: (Platform.OS === 'ios') ? 64 : 54
    },
    chatContainer: {
        flex: 11,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    messageContainer: {

    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    message: {
        fontSize: 16
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        height: 50
    },
    textContainer: {
        flex: 10,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5,
    },
    buttonContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingRight: 10,
        marginBottom: 5
    },
    button: {
        flex:1,
        borderColor: '#2980b9',
        backgroundColor: '#3498db',
        borderRadius: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ChatScreen