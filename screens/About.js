// ./screens/About.js
import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import { drawerStyles } from '../styles/drawerStyles';

import { globalStyles } from '../styles/globalStyles';


const About = () => {
    return (
        <View style={ drawerStyles.container }>
            <View>
                <TouchableOpacity>
                    <View style={ drawerStyles.userContainer }>
                        <Image 
                            source={ require('../assets/fotoperfil.jpeg')}
                            style={[ drawerStyles.userImagen, styles.image ]}
                        />

                        <View style={ drawerStyles.userNombre }>
                            <Text style={[ drawerStyles.userTitulo, styles.title ]}>Javier Leonardo Perea</Text>
                            <Text style={[ styles.subTitle, globalStyles.upper ]}>Mobile App Developer</Text>
                            <View style={ drawerStyles.userContainer }>
                              <Image 
                                source={ require('../assets/reactnative.png') }
                                style={ styles.reactImg }
                              />
                            </View>
                            <Text style={[ styles.subTitle, globalStyles.upper ]}>React Native</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )    
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
    borderRadius: 50,
    marginVertical: 25
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#353535',
    marginVertical: 5,
  },
  reactImg: {
    height: 80,
    width: 140,
    borderRadius: 10
  }
});

export default About;