import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { isEmailValid, isValidPassword } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { onLoggedIn } from "../../store/slice";

interface loginHookProps {
    email: string;
    password: string;
    onEmailChange: (text: string) => void
    onPasswordChange: (text: string) => void
    validEmail: boolean;
    validPassword: boolean;
    isPasswordVisible: boolean;
    onLoginPress: () => void;
}

export const useLoginHooks = (): loginHookProps => {
    const [email, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validEmail, setValidEmail] = useState(true)
    const [validPassword, setValidPassword] = useState(true);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()

    const onEmailChange = (emailText: string) => {
        setUserName(emailText)
        if (emailText.length === 0) {
            setValidEmail(false)
        } else if (!isEmailValid(emailText)) {
            setValidEmail(false)
        } else {
            setValidEmail(true)
        }
    }

    const onPasswordChange = (passwordText: string) => {
        setPassword(passwordText)
        if (passwordText.length === 0) {
            setValidPassword(false)
        } else if (!isValidPassword(passwordText)) {
            setValidPassword(false)
        } else {
            setValidPassword(true)
        }
    }

    const isValidField = () => {
        onEmailChange(email);
        onPasswordChange(password);
        if (email !== "" && password !== "" && validEmail && validPassword) {
            return true
        } else {
            return false
        }
    }

    const onLoginPress = () => {
        if (isValidField()) {
            dispatch(onLoggedIn())
            navigation.navigate("HomeScreen")
        }
    }

    return {
        email,
        password,
        onEmailChange,
        onPasswordChange,
        validEmail,
        validPassword,
        isPasswordVisible,
        onLoginPress
    }

}