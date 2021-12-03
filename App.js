import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
        <View style={styles.tabWrapper}>
            <Text style={styles.tab}>Calendar</Text>
            <Text style={styles.tab}>Physicality</Text>
            <Text style={styles.tab}>Advice</Text>
            <Text style={styles.tab}>Personal</Text>
            <Text style={styles.tabLogin}>Login</Text>
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
        borderRadius: 150/2.5,
        margin: 10,
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
        margin: 2,
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'notoserif',
        fontStyle: 'italic'
    },
    footerText: {
        color: '#fff',
        fontSize: 50,
        alignSelf: 'center',
        top: '80%',
        position: 'absolute'
    },
});

export default App;

