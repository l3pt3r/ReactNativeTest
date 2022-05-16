import React from 'react';
import { StyleSheet, ImageBackground, Button, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground style={styles.background}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo} />
            <Text style={styles.txt}>Welcome ! Press Continue</Text>
            <Button title='Continue'
                style={styles.btn}
                onPress={() => navigation.navigate('Main')} >

            </Button>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#003',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        position: 'relative',
    },
    txt: {
        margin: 20,
        color: "#00d8ff",
        position: 'relative',
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: "#00d8ff",
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        color: "#003"
    }
});

export default WelcomeScreen;