import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import WriteScreen from "./WriteScreen";
import {Button} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";


const Stack = createStackNavigator();

function NewsFeedScreen({}) {
    return (
        <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                    headerTitle: 'News Feed',
                }}
            />
            <Stack.Screen
                name={"Write"}
                component={WriteScreen}
                options={{
                    headerTitle: 'Write',
                }}
            />
        </Stack.Navigator>
    )
}

export default NewsFeedScreen;
