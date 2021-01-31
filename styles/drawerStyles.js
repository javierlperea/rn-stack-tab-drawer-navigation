import { StyleSheet } from "react-native";

export const drawerStyles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    bgContainer: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#A0A0A0'
    },

    userContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },

    userImagen: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    camaraContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        width: 20
    },
    
    camaraIcon: {
        textAlign: 'center',
        backgroundColor: '#E65A0F',
        color: '#FFF',
        width: 30,
        height: 20,
        position: 'absolute',
        left: 15,
        bottom: 3,
        fontSize: 18,
        borderRadius: 50
    },

    userNombre: {
        marginVertical: 10,
    },

    userTitulo: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 18
    },

    userSubTitulo: {
        textAlign: 'center',
        fontSize: 14,
        color: '#E65A0F',
        paddingVertical: 5,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10,
       marginVertical: 15,
    },

    iconoContainer: {
        flex: 1.5,
        justifyContent: 'center'
    },

    tituloContainer: {
        flex: 8.5,
        justifyContent: 'center'
    },

    tituloTxt: {
        fontSize: 18
    },
    difuminado:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    },
    fondoImagen:{
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    menuDrawer: {
        color: '#162F3C',
        fontWeight: 'bold'

    }
})