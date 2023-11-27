import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native"
import { styles } from "./login.styles";

interface loginProps {
    email: string;
    password: string;
    onEmailChange: (text: string) => void
    onPasswordChange: (text: string) => void
    validEmail: boolean;
    validPassword: boolean;
    isPasswordVisible: boolean;
    onLoginPress: () => void;
}

export const LoginView = (props: loginProps) => {
    const {
        email,
        password,
        onEmailChange,
        onPasswordChange,
        validEmail,
        validPassword,
        isPasswordVisible,
        onLoginPress
    } = props

    const backgroundImage = require("../../../assets/background.jpg")

    return (
        <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Email"
                    placeholderTextColor={"#000000"}
                    value={email}
                    onChangeText={(text: string) => onEmailChange(text)}
                />
                {!validEmail ? <Text style={styles.errorText}>Please Enter Valid User Name</Text> : null}
                <View style={styles.passwordView}>
                    <TextInput style={styles.passwordInput}
                        placeholder="Enter Password"
                        placeholderTextColor={"#000000"}
                        value={password}
                        onChangeText={(text: string) => onPasswordChange(text)}
                    />
                </View>
                {!validPassword ? <Text style={styles.errorText}>Please Enter Valid Password</Text> : null}
                <TouchableOpacity style={styles.buttonStyle} onPress={() => onLoginPress()}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}