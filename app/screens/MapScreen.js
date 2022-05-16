import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView from 'react-native-maps';
import MainScreen from '../screens/MainScreen';

const data = require('../test_pois.json');

const MapScreen = ({ navigation }) => {

    console.log(data)

    return (

        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})

export default MapScreen;