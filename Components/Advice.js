import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Advice = () => {
  return (
    <View style={styles.body}>
        <LinearGradient colors={['#F5C822', '#DB3B69', '#813BCE', '#00A7D9']} style={styles.linearGradient}>
        <Text style={styles.footerText}>Advice</Text>
        </LinearGradient>
    </View>
  );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#333',
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

export default Advice;

