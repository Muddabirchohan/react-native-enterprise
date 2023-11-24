import { Image, StyleSheet, View } from 'react-native';
import Dashboard from '../../layout/dashboard';
import { stylesRoboto } from '../../styles/styles';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';



const { useNavigation } = require('@react-navigation/native');

function HomeScreen() {

    const navigation = useNavigation()

    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
            <Dashboard >


                <View>
                    <View style={styles.column1}>

                        <Image source={require('./../../images/poet.jpg')}
                            style={{

                                width: 350,
                                height: 350,
                                resizeMode: 'contain',

                            }} />

                    </View>




                </View>



                <View
                    style={styles.column2}
                >


                    <Text style={styles.text}> Personalize your poetic journey, share your masterpieces, and explore the beauty of language in a seamless, visually appealing interface. Join us in celebrating the art of words – where every line tells a story and every poem paints a picture. Your literary adventure begins here. </Text>

                </View>

                <Button size="lg" color="#002244" onPress={() => navigation.navigate('ListCategories')}>View</Button>


            </Dashboard>

        </View >
    );
}


const styles = StyleSheet.create({

    column1: {
        flex: 1, // Each column takes up equal space

        height: 300,
        justifyContent: "center",
        alignItems: "center"
        // padding: 16, // Optional: Add padding for content spacing
    },
    column2: {
        borderTopStartRadius: 150,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#002D62",
        textAlign: "center",
        height: 360,
        padding: 30

    },
    text: {
        color: "white",
        fontSize: 16,
        // fontFamily: "Roboto",
        textAlign: "center"
    }
});


export default withTheme(HomeScreen, '');