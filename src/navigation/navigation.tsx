import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login-screen/login.screen';
import { HomeScreen } from '../screens/home-screen/home.screen';
import { useSelector } from "react-redux";


export type PrimaryParamList = {
    Login: undefined
    HomeScreen: undefined
}

const Stack = createNativeStackNavigator<PrimaryParamList>();

const PrimaryNavigator = () => {
    const productStore = useSelector((store: any) => store.productList)
    const { isLoggedIn } = productStore

    const AuthNavigator = () => {
        return (
            <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        )
    }

    const HomeNavigator = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        )
    }


    return (
        !isLoggedIn ? AuthNavigator() : HomeNavigator()
    );
}


export default PrimaryNavigator;