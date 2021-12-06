import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Agenda } from 'react-native-calendars';
import { Card } from 'react-native-paper';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const Scheduler = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                items[strTime] = [];
                const numItems = Math.floor(Math.random() * 3 + 1);
                for (let j = 0; j < numItems; j++) {
                    items[strTime].push({
                    name: 'Item for ' + strTime + ' #' + j,
                    height: Math.max(50, Math.floor(Math.random() * 150))
                    });
                }
            }
        }
        const newItems = {};
        Object.keys(items).forEach(key => {
            newItems[key] = items[key];
        });
        setItems(newItems)
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 10 }}>
                <Card>
                    <Card.Content>
                        <View style={styles.cardPerDate}>
                            <Text>{item.name}</Text>
                            <Avatar 
                                style={{ backgroundColor: 'black'}}
                                icon={{name: 'user', type: 'font-awesome'}}
                            />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.body}>
            <LinearGradient colors={['#FFF700', '#02EBAF', '#02EBAF', '#FFF700']} style={styles.linearGradient}>
                <Agenda
                    items={items}
                    loadItemsForMonth={loadItems}
                    selected={'2017-05-16'} 
                    renderItem={renderItem}
                />
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
    cardPerDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
        backgroundColor: '#fff'
    },
    footerText: {
        color: '#fff',
        fontSize: 50,
        alignSelf: 'center',
        top: '80%',
        position: 'absolute'
    },
});

export default Scheduler;

