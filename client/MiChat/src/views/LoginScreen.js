import React, {Component} from 'react'
import {
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native'
import {Actions as NavActions} from 'react-native-router-flux'
import Button from 'apsl-react-native-button'
import Colors from '../config/Colors'
import API from '../api/Api'

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: 'password',
            userID: null
        };
        this.api = API.create()
    }

    handleLoginPress() {
        const {username, password} = this.state
        this.api.logIn(username, password).then(this.setUserID.bind(this));
    }

    setUserID(response) {
        if (response.data.userid != null) {
            this.setState({
                userID: response.data.userid,
            });
            NavActions.chatRoomScreen(this.state.userID)
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                        placeholder='Username'
                        defaultValue='admin'
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({username: text})}
                        value={this.state.text}
                    />
                    <TextInput
                        placeholder='Password'
                        defaultValue='password'
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.text}
                    />
                    <Button
                        background={TouchableNativeFeedback.Ripple('#000000')}
                        style={styles.buttonStyle}
                        textStyle={styles.textStyle}
                        onPress={this.handleLoginPress.bind(this)}>
                        Login
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        margin: 20,
        marginTop: 150
    },
    textInputStyle: {
        color: 'black',
        fontSize: 18,
        height: 60,
        borderColor: 'white',
        borderWidth: 1
    },
    textStyle: {
        color: 'black',
        fontSize: 20,

    },
    buttonStyle: {
        marginTop: 30,
        borderColor: '#2980b9',
        backgroundColor: '#3498db',
        borderRadius: 4,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1.5
    },
});

export default LoginScreen