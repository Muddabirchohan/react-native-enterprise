import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Dashboard from '../../layout/dashboard';


export default function ListScreen() {

    const navigation = useNavigation()

    const [loader, showLoader] = useState(true)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            showLoader(!loader)
        }, 1000)


        return () => clearTimeout(timeoutId);

    }, [])

    if (loader) return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
            <ActivityIndicator size="medium" color="#0000ff" />
        </View>
    )


    return (
        <View style={{ flex: 1 }}>
            <Button onPress={() => navigation.navigate('Home')} title='goto'> got o </Button>
            <Dashboard>
                {Array.from(Array(10).keys()).map(item => {
                
                return(
                    <Text> {item} </Text>
                )
                })}
            </Dashboard>
        </View>
    );
}