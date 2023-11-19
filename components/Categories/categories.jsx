import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Dashboard from '../../layout/dashboard';
import { mediumLinks } from '../../helper/urls';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements'


export default function ListCategories() {

    const navigation = useNavigation()

    const [loader, showLoader] = useState(false)
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState("")

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


    const categories = [
        {
            name: 'Action',
            imageSource: require("./../../images/poet.jpg")

        },
        {
            name: 'Thriller',
            imageSource: require("./../../images/poet.jpg")
        },

        {
            name: 'Humor',
            imageSource: require("./../../images/poet.jpg")
        },
        
        // more categories here
    ]






    const updateSearch = (search) => {
        showLoader(true)
        setSearch(search)
        setTimeout(() => {
            showLoader(false)
        }, 1000)

    };

    const gotoProductsInCategory = (category) => {
        navigation.navigate('ArticleInCategories',{ category })
    }
    
    return (
        <View style={styles.categories}>


            <SearchBar
                containerStyle={{ backgroundColor: "#" }}
                inputContainerStyle={{ backgroundColor: "white" }}
                placeholder="Type Here..."
                onChangeText={updateSearch}
                value={search}
                showLoading={loader}
            />
            <Dashboard>
                <View style={styles.container}>
                    {
                        categories.filter(item => item.name.toLowerCase().includes(search)).length > 0 ?

                            categories.filter(item => item.name.toLowerCase().includes(search)).map((item, i) => {
                                return (
                                    <View key={i}>
                                        <Card containerStyle={styles.card} >

                                            <Icon
                                                raised
                                                name='heartbeat'
                                                type='font-awesome'
                                                color='#f50'
                                                
                                                onPress={() => gotoProductsInCategory(item.name)}
                                                />
                                            <Text style={styles.name}>{item.name}</Text>
                                        </Card>
                                    </View>
                                );
                            }) : <View style={styles.noDataText}>
                                <Text > No data found</Text>
                            </View>
                    }
                </View>

            </Dashboard>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "left",
        alignItems: "center"
    },

    categories: {
        flex: 1,
        height: "100%",
        padding: 10

    },
    card: {
        backgroundColor: "#0f4d92",
        height: 150,
        width: 150,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        color: "white",
        fontSize: 22,
        textAlign: "center"
    },
    noDataText: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height:"100%",
    }
});
