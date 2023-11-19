import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Dashboard from '../../layout/dashboard';
import { mediumLinks } from '../../helper/urls';


export default function ListScreen() {

    const navigation = useNavigation()

    const [loader, showLoader] = useState(false)
    const [articles, setArticles] = useState([])

    useEffect(() => {

        showLoader(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://192.168.0.104:3001/articles/all", requestOptions)
            .then(response => response.json())
            .then(result => setArticles(result))
            .finally(showLoader(false)
            )
            .catch(error => console.log('error', error));





    }, [])



    console.log("art", articles[0])

    if (loader) return (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
            <ActivityIndicator size="medium" color="#0000ff" />
        </View>
    )


    return (
        <View style={{ flex: 1 }}>
            {/* <Button onPress={() => navigation.navigate('Home')} title='goto'> got o </Button> */}
            <Dashboard>
                {articles && articles.length > 0 && articles?.map((item, index) => {

                    return (
                        <View key={index} style={{ backgroundColor: "#f4521e", margin: 15, marginTop: 100, padding: 35, borderRadius: 30, height: 200 }}>



                            <View style={styles.container}>
                                <View style={styles.column}>
                                    <Image source={{
                                        uri: item.images[0],
                                    }}
                                        style={{
                                            height: 100,
                                            width: 100,
                                            borderRadius: 50
                                        }} />
                                    {/* <Image source={require('./../../images/portfolio1.jpg')}
                                        style={{
                                            height: 100,
                                            width: 100,
                                            borderRadius: 50
                                        }} /> */}

                                </View>

                                <View style={styles.column}>
                                    {/* <Text style={{fontFamily: "RobotoCondensed-Bold" , color: "white" , fontSize: 22, padding: 10}}>article-{index+1}</Text> 
                        <Text style={{color: "white" , fontSize: 16, padding: 10}}>Posted: {index+1} day ago</Text>  */}
                                    <Text> {item.title} </Text>

                                </View>
                            </View>
                        </View>
                    )
                })}
            </Dashboard>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // This sets the layout to a row
        justifyContent: 'space-between', // Adjust as needed (space-between, space-around, etc.)
        paddingHorizontal: 16, // Optional: Add padding for spacing
    },
    column: {
        flex: 1, // Each column takes up equal space
        // justifyContent: "center",
        // alignItems: "center",
        // padding: 16, // Optional: Add padding for content spacing
    },
    column1: {
        flex: 1, // Each column takes up equal space

        padding: 16, // Optional: Add padding for content spacing

    },
});
