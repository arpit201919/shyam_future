import React from "react"
import { LoginView } from "./components/login.view"
import { useLoginHooks } from "./login.hooks"

export const LoginScreen = () => {
    const {
        email,
        password,
        onEmailChange,
        onPasswordChange,
        validEmail,
        validPassword,
        isPasswordVisible,
        onLoginPress
    } = useLoginHooks()

    return <LoginView
        email={email}
        password={password}
        validEmail={validEmail}
        validPassword={validPassword}
        isPasswordVisible={isPasswordVisible}
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onLoginPress={onLoginPress}
    />
}