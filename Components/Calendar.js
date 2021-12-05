import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const Calendar = () => {
  return (
    <View style={styles.body}>
        <LinearGradient colors={['#FFF700', '#02EBAF', '#02EBAF', '#FFF700']} style={styles.linearGradient}>
        <Text style={styles.footerText}>Calendar</Text>
        </LinearGradient>
    </View>
  );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFF700',
        flex: 1
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    footerText: {
        color: '#fff',
        fontSize: 50,
        alignSelf: 'center',
        top: '80%',
        position: 'absolute'
    },
});

export default Calendar;

