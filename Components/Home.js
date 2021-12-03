import { NavigationHelpersContext } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.body}>
        <View style={styles.tabWrapper}>
            <Text 
                onPress={() => navigation.navigate('Calendar')}
                style={styles.tab}>Calendar</Text>
            <Text 
                onPress={() => navigation.navigate('Physicality')}
                style={styles.tab}>Physicality</Text>
            <Text 
                onPress={() => navigation.navigate('Advice')}
                style={styles.tab}>Advice</Text>
            <Text 
                onPress={() => navigation.navigate('Personal')}
                style={styles.tab}>Personal</Text>
            <Text 
                onPress={() => navigation.navigate('Login')}
                style={styles.tabLogin}>Login</Text>
        </View>
        <Text style={styles.footerText}>Ayudante</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#333',
        flex: 1
    },
    tabWrapper: { 
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
    },
    tab: {
        color: '#fff',
        backgroundColor: '#64F5E9',
        width: 150,
        borderRadius: 150/3.5,
        margin: 15,
        lineHeight: 150,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'notoserif',
        fontStyle: 'italic'
    },
    tabLogin: {
        color: '#fff',
        backgroundColor: '#64F5E9',
        width: 304,
        borderRadius: 10,
        height: 50,
        margin: 2,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'notoserif',
        fontStyle: 'italic',
        marginTop: 20
    },
    footerText: {
        color: '#fff',
        fontSize: 50,
        alignSelf: 'center',
        top: '80%',
        position: 'absolute'
    },
});

export default Home;

