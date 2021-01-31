import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

import { Subheading, Headline } from 'react-native-paper';

const Product = ({route}) => {
    
    const { item } = route.params;
    
    return (
        <View style={[ globalStyles.container, styles.container ]}>
            <View style={ styles.background }>
                <Headline style={[ styles.title ]}>{ item.descripcion }</Headline>

                <View style={ globalStyles.center }>
                    <Text style={[ styles.text, globalStyles.capital ]}>
                        Código: <Subheading style={ styles.subheading }>{ item.codigo }</Subheading>
                    </Text>    

                    <Text style={ styles.text }>
                        Descripción: <Subheading style={ styles.subheading }>{ item.descripcion }</Subheading>
                    </Text>    

                    <Text style={ styles.text }>
                        Precio Público: <Subheading style={ styles.subheading }>$ { item.precioPublico }</Subheading>
                    </Text>    

                    <Text style={ styles.text }>
                        Precio Revenderor: <Subheading style={ styles.subheading }>$ { item.precioRevendedor }</Subheading>
                    </Text>    

                    <Text style={ styles.text }>
                        Stock: <Subheading style={ styles.subheading }>{ item.stock }</Subheading>
                    </Text>    
                </View>
            </View>    
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70
    },  
    background: {
        backgroundColor: '#6C8E76',
        borderRadius: 10,
    },
    text: {
        marginBottom: 20,
        fontSize: 22,
        color: '#FFF',
    },
    title: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 40,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    btn: {
        marginTop: 100,
        backgroundColor: 'red'
    },
    subheading: {
        color: '#FFF',
        textTransform: 'uppercase',
        fontSize: 18,
    }
});


export default Product
