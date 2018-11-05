import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import EventCard from './EventCard';

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
            renderItem = {({item}) => <EventCard event={item}/>}
            keyExtractor = {item=>item.id}
            />
        );
    }
}

export default EventList;