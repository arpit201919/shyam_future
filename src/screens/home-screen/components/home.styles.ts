import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 9
    },
    itemContainer: {
        backgroundColor: "#FFFFFF",
        marginBottom: 20,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8
    },
    imageStyle: {
        height: 120,
        width: 85,
        borderRadius: 8
    },
    titleText: {
        fontSize: 18,
        fontWeight: "800",
        color: "#000000",
        marginBottom: 8
    },
    descText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000000",
    },
    priceText: {
        fontSize: 16,
        fontWeight: "500",
        color: "blue",
    },
    detailCont: {
        width: "70%",
        marginLeft: 15
    }
})