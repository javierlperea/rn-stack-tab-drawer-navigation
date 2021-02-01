import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, Switch, StyleSheet } from 'react-native';
// import { DrawerItemList } from '@react-navigation/drawer';

import { drawerStyles } from '../styles/drawerStyles';
import DrawerMenu from '../components/DrawerMenu';

import Icon from 'react-native-vector-icons/Feather';


const DrawerContent = (props) => {

    const [ isDarkTheme, setisDarkTheme ] = useState(false);

    const toggleSwitch = () => {
        setisDarkTheme(previousState => !previousState);
    }

    return (
        <View style={ drawerStyles.container }>
            <View style={ drawerStyles.bgContainer }>
                <TouchableOpacity>
                    <View style={ drawerStyles.userContainer }>
                        <Image 
                            style={ drawerStyles.userImagen }
                            source={ require('../assets/fotoperfil.jpeg')}
                        />
                        <View style={ drawerStyles.camaraContainer }>
                            <Icon style={ drawerStyles.camaraIcon }  name="camera" />
                        </View>
                        <View style={ drawerStyles.userNombre }>
                            <Text style={ drawerStyles.userTitulo }>Javier Perea</Text>
                            <Text style={ drawerStyles.userSubTitulo }>See Profile</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={ drawerStyles.bgContainer }>
                {/* BOTONES A HOME, SETTINGS y ABOUT ME 
                <DrawerItemList {...props}/>        <-- MUESTRA LOS BOTONES POR DEFECTO */}
                <DrawerMenu 
                    iconName='home' 
                    titleName='Home' 
                    navigation={ () => props.navigation.navigate('Home')}
                />
                <DrawerMenu 
                    iconName='settings' 
                    titleName='Settings'
                    navigation={ () => props.navigation.navigate('Settings')}
                />
                <DrawerMenu 
                    iconName='info' 
                    titleName='About Me'
                    navigation={ () => props.navigation.navigate('About')}
                    />
            </View>

            {/* Swich for dark theme */}
            <View style={ styles.darkTheme }>
                <Text style={ drawerStyles.tituloTxt }>Dark Theme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#03A9F4" }}
                    thumbColor={isDarkTheme ? "#f4f3f4" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}
                />
            </View>
        </View>
    )
}

export default DrawerContent;

const styles = StyleSheet.create({
    containerTheme: {
    },
    darkTheme: {
        marginLeft: 15,
        width:'90%', 
        alignItems:'center',
        flexDirection:'row', 
        justifyContent: 'space-around',
        paddingVertical: 15
    }
})

