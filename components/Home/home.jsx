import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Dashboard from '../../layout/dashboard';
import { stylesRoboto } from '../../styles/styles';

const { useNavigation } = require('@react-navigation/native');

export default function HomeScreen() {

    const navigation = useNavigation()

    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
            {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
            <Dashboard>
                <View style={styles.container}>
                    <View style={styles.column1}>
                        <Image source={require('./../../images/portfolio1.jpg')}
                            style={{
                                flex: 1,
                                width: 350,
                                height: 350,
                                resizeMode: 'contain'
                            }} />
                    </View>




                </View>

                <View style={styles.container}>
                    <View style={styles.column}>
                        <Image source={require('./../../images/portfolio2.jpg')}
                            style={{ width: 80 }} />

                    </View>
                    <View style={styles.column}>
                        <Text style={{ fontFamily: "RobotoCondensed-Bold", color: "white", fontSize: 18 }}>
                            PORTFOLIO - CHOHAN
                        </Text>
                    </View>
                    <View style={styles.column}>
                        <Image source={require('./../../images/portfolio2.jpg')}
                            style={{ width: 80 }} />

                    </View>
                </View>


                <View style={{
                display: "flex",
                marginTop: 70
            }}>

                <Button
                    title=" Go To Profile"
                    color="#3efa"
                    onPress={() => navigation.navigate('ListScreen')} />
            </View>

            </Dashboard>

        </View >
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
        justifyContent: "center",
        alignItems: "center",
        padding: 16, // Optional: Add padding for content spacing
    },
    column1: {
        flex: 1, // Each column takes up equal space

        padding: 16, // Optional: Add padding for content spacing
    },
});
