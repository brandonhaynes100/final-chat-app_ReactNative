import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class If extends Component {
    render() {
        return (
            {!!props.condition ? props.children : null; };
        );
    }
}








const If = props => {
    return !!props.condition ? props.children : null;
};

export default If;