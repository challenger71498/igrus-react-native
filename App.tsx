import React from 'react';
import 'react-native-gesture-handler';
import {Alert, Button, FlatList, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Ionicons} from '@expo/vector-icons';
import {createStackNavigator} from "@react-navigation/stack";
import NewsFeedScreen from "./src/Screens/NewsFeedScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

const Drawer = createDrawerNavigator();

function SettingsScreen() {
    return (
        <SettingsMoreScreen/>
    )
}

function SettingsMoreScreen() {
    return (
        <Drawer.Navigator
            initialRouteName={"One"}
            drawerType={"back"}
            drawerPosition={"right"}
            backBehavior={"history"}>
            <Drawer.Screen name={"One"} component={OneScreen}/>
            <Drawer.Screen name={"Two"} component={TwoScreen}/>
        </Drawer.Navigator>
    )
}

function OneScreen() {
    return (
        <View style={styles.viewDefault}>
            <Text>ONE</Text>
        </View>
    )
}

function TwoScreen() {
    return (
        <View style={styles.viewDefault}>
            <Text>Two</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"News Feed"}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName: string = "";

                        switch(route.name) {
                            case 'News Feed':
                                iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                                break;
                            case 'Profile':
                                iconName = 'ios-person';
                                break;
                            case 'Settings':
                                iconName = 'ios-list';
                                break;
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#3d7dca',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="News Feed" component={NewsFeedScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    viewDefault: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
