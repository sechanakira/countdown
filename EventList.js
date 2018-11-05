import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
    list: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#F3F3F3'
    },
  });

class EventList extends Component{

    state = {
        event : []
    }

    componentDidMount(){
        const events = require('./db.json').events;
        this.setState({events});
    }

    render(){
        return(
            <FlatList
            data = {this.state.events}
            renderItem = {({item}) => <Text>{item.title}</Text>}
            keyExtractor = {item=>item.id}
            />
        );
    }
}

export default EventList;