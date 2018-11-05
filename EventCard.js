import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import{
  formatDate,
  getCountDownParts,
} from './api';

const styles = StyleSheet.create({
});

export default function EventCard({event}){
  return(
    <View style={styles.card}>
      <View style={styles.cardHeader}>
      </View>
    </View>
  )
}

EventCard.PropTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date)
  })
}