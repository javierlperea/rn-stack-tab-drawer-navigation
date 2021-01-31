import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: '2.5%'
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    },
    upper: {
        textTransform: 'uppercase'
    },
    capital: {
        textTransform: 'capitalize'
    },
    center: {
        alignItems: 'center'
    },
    btnPrimary: {
        backgroundColor: '#E65A0F', 
        borderRadius: 8, 
        height: 50,
        width: '80%'
    },
    textBtn: {
        color: '#FFF',
        fontSize: 20,
    }
})