import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';
import { getDistance } from 'geolib';
import MainScreen from '../screens/MainScreen';

const data = require('../test_pois.json');
data.sort((a, b) => (a.address > b.address) ? 1 : -1)
const geolib = require('geolib');

const ListScreen = ({ navigation }) => {

    console.log(MainScreen.data)
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log(
                'You are ',
                geolib.getDistance(position.coords, {
                    latitude: 51.525,
                    longitude: 7.4575,
                }),
                'meters away from 51.525, 7.4575'
            );
        },
        () => {
            alert('Position could not be determined.');
        }
    );


    return (
        // <Text style={styles.txt}> I'm main screen</Text>
        <SafeAreaView style={styles.background}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.listitem} key={item.id}>
                        <Text style={styles.txt}>{item.address}</Text>
                    </View>
                )}
            />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
    },
    listitem: {
        width: "100vw",
        height: 70,
        backgroundColor: "#ccd",
        marginVertical: 10,
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    txt: {
        color: "#003",
        fontSize: 20
    }
})

export default ListScreen;