import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home/home';
import ListScreen from './Detail/detail';

export default function NavigationCustom() {

    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ListScreen" component={ListScreen} options={{
                    title: 'List Article(s)',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
