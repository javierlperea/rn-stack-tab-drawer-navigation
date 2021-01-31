import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { drawerStyles } from '../styles/drawerStyles'

import Icon from 'react-native-vector-icons/Feather';

const DrawerMenu = (props) => {
    return (
        <TouchableOpacity onPress={ props.navigation }>
            <View style={ drawerStyles.menuContainer }>
                <View style={ drawerStyles.iconoContainer }>
                    <Icon size={19} name={props.iconName}/>
                </View>
                <View style={ drawerStyles.tituloContainer }>
                    <Text style={ drawerStyles.tituloTxt }>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DrawerMenu
