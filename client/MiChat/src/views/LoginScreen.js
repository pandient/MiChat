import React, {Component} from 'react'
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard,
    LayoutAnimation,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native'
import {connect} from 'react-redux'
import {Actions as NavActions} from 'react-native-router-flux'
import Button from 'apsl-react-native-button'
import Colors from '../config/Colors'

class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'test@ze.com',
            password: 'password',
        }
    }

    render() {
        const {username, password} = this.state
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <TextInput
                        placeholder='Username'
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({username: text})}
                        value={this.state.text}
                    />
                    <TextInput
                        placeholder='Password'
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.text}
                    />
                    <Button
                        background={TouchableNativeFeedback.Ripple('#000000')}
                        style={styles.buttonStyle}
                        textStyle={styles.textStyle}
                        onPress={() => {
                            console.log('Login pressed')
                        }}>
                        Login
                    </Button>
                </View>
            </ScrollView >
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: NavActions.pop,
        attemptLogin: (username, password) => dispatch(Actions.attemptLogin(username, password))
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
})

export default LoginScreen
//export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)