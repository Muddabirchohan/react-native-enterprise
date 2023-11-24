import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Dashboard from '../../layout/dashboard';
import { mediumLinks } from '../../helper/urls';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements'


export default function ArticleInCategory({ route }) {

    const { category } = route.params;

    const navigation = useNavigation()

    const [loader, showLoader] = useState(true)
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {

        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch(`http://192.168.0.107:3001/articles/category/${category.toLowerCase()}`, requestOptions)
            .then(response => response.json())
            .then(result => setArticles(result))
        .finally(showLoader(false))
            .catch(error => console.log('error', error));

    }, [category])

    const gotoSingleArticle = (category) => {

        navigation.navigate('ArticleSingle',{ category })
    }


  


    if (loader) return (<View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
            <ActivityIndicator size="medium" color="#0000ff" />
        </View>
    )

   

    return (
        <View style={styles.categories}>

            <Dashboard>
                <Text> {category} </Text>
                {articles && articles.length > 0 ? articles?.map((item, index) => {

                    return (
                        <Card>
                            <View style={styles.container}  >
                                <Text onPress={() => gotoSingleArticle(item)} >{item?.title}</Text>
                            </View>
                        </Card>
                    )
                }) :

                    <View>
                        <Text> No articles found </Text>
                    </View>

                }

            </Dashboard>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        width: 250,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        color: "white",
        fontSize: 33,
        textAlign: "center"
    },
    noDataText: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height: "100%",
    }
});
