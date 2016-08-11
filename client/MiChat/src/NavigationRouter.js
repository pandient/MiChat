import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginScreen from './views/LoginScreen'
import ChatRoomScreen from './views/ChatRoomScreen'

class NavigationRouter extends Component {
    render () {
        return (
            <Router>
                    <Scene key='root'>
                        <Scene initial key='loginScreen' component={LoginScreen} title='Login' />
                        <Scene key='chatRoomScreen' component={ChatRoomScreen} title='Chat Rooms' />
                    </Scene>
            </Router>
        )
    }
}

export default NavigationRouter