import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        height: 170,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 120,
        margin:10,
    }
});

export default styles;
