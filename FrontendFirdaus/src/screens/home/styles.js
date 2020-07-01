import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    image: {
        height: 300,
        marginTop: 0,
        resizeMode: "cover",
        justifyContent: "space-around"
    },
    buttonSummary: {
        backgroundColor: "#6200ea",
        borderRadius: 30,
        height: "30%",
        paddingLeft: 30,
        marginVertical: 8,
        marginHorizontal: 15,
    },
    textSignup: {
        fontSize: 16,
        textAlign: 'center',
        paddingRight: 100,
        color: 'black'
    },
    title: {
        textAlign: 'center',
        color: '#6200ea',
        marginBottom: 30,
        marginTop: 10,
        fontSize: 40,
        fontFamily: "sans-serif-condensed"
    },

});

export default styles;
