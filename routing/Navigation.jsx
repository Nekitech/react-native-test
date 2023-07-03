import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../screens/PostScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'}
                              component={HomeScreen}
                              options={{
                                  title: 'Новости'
                              }}/>
                <Stack.Screen name={'Article'}
                              component={PostScreen}
                              options={{
                                  title: 'Статья'
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
