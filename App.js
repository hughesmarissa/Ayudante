import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//imports
import Home from './Components/Home';
import Personal from './Components/Personal';
import Calendar from './Components/Calendar';
import Advice from './Components/Advice';
import Physicality from './Components/Physicality';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{ title: 'Ayudante'}} 
                />
                <Stack.Screen 
                    name="Personal" 
                    component={Personal} 
                    options={{ title: 'Personal'}} 
                />
                <Stack.Screen 
                    name="Calendar" 
                    component={Calendar} 
                    options={{ title: 'Calendar'}} 
                />
                <Stack.Screen 
                    name="Advice" 
                    component={Advice} 
                    options={{ title: 'Advice'}} 
                />
                <Stack.Screen 
                    name="Physicality" 
                    component={Physicality} 
                    options={{ title: 'Physicality'}} 
                />    
            </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

export default App;