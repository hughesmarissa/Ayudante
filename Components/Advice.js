import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Advice = () => {
  return (
    <View style={styles.body}>
        <Text style={styles.footerText}>Advice</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    body: {
        backgroundColor: '#333',
        flex: 1
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

