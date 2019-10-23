import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        return(
            <View style={{ flex:1, justifyContent: "center", alignItems: "center", height: 150, backgroundColor: "#141F39"}}>
                <Text style={{color: "#ffffff", fontSize: 30}}>Welcome to Devlink :)</Text>
            </View>
        )
    }
}