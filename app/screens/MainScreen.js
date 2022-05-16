import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.background}>
            <Tab.Navigator>
                <Tab.Screen name="List"
                    component={ListScreen}
                    options={{
                        tabBarLabel: 'List',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="text" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Map" 
                component={MapScreen} 
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map" color={color} size={size} />
                    ),
                }}
                />
            </Tab.Navigator>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#eee',
        // alignItems: 'center',
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

export default MainScreen;