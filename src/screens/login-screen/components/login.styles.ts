import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    inputStyle: {
        borderWidth: 1,
        padding: 6,
        borderRadius: 8,
        borderColor: "#2b3327",
        marginTop: 10,
        height: 45,
        backgroundColor: "#FFFFFF",
        fontSize: 15,
        color: "#000000"
    },
    buttonStyle: {
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        borderWidth: 1,
        borderColor: "#2b3327",
        marginVertical: 30,
        borderRadius: 10,
        backgroundColor: "#99d2f6"
    },
    errorText: {
        fontSize: 12,
        color: "#ff3333",
        marginTop: 3,
    },
    passwordView: {
        borderWidth: 1,
        paddingLeft: 6,
        paddingRight: 10,
        borderRadius: 8,
        borderColor: "#2b3327",
        marginTop: 15,
        backgroundColor: "#FFFFFF",

    },
    passwordInput: {
        height: 48,
        fontSize: 15,
        color: "#000000"
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
        fontStyle: "italic"
    }
})