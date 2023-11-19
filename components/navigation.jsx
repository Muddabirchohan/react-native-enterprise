import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home/home';
import ListScreen from './Detail/detail';
import ListCategories from './Categories/categories';
import ArticleInCategory from './Articles/article';

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
                   <Stack.Screen name="ListCategories" component={ListCategories} options={{
                    title: 'List Categories(s)',
                    headerStyle: {
                        backgroundColor: '#003153',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }} />
    <Stack.Screen name="ArticleInCategories" component={ArticleInCategory} options={{
                    title: 'Article(s)',
                    headerStyle: {
                        backgroundColor: '#003153',
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
