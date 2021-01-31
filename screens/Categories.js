// ./screens/Categories.js

import React, { useState } from "react";
import { View, StyleSheet,FlatList } from "react-native";
import { Button, List } from 'react-native-paper';

import { globalStyles } from "../styles/globalStyles";

import axios from 'axios';

const Categories = ({navigation}) => {
    console.log(navigation)

    const [productos, setProductos] = useState([]);

    const getProductosByCategory = async (categoria) => {
        try {
            const url = ('http://10.0.2.2:3000/products');
            const { data } = await axios.get(url);
            const filtro = data.filter( prod => prod.categoria === categoria );    
            setProductos(filtro)          
    
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>

            <View style={ globalStyles.container }>

            <View style={ styles.containerButtons }>
                
                <View style={ styles.boxBtn }>
                    <Button 
                        style={ styles.btn}
                        mode="contained"
                        onPress={ () => getProductosByCategory('capilares') }
                    >
                Capilares
                    </Button>
                </View>

                <View style={ styles.boxBtn }>
                    <Button 
                        style={ styles.btn}
                        mode="contained"
                        onPress={ () => getProductosByCategory('corporales') }
                    >
                Corporales
                    </Button>
                </View>

                <View style={ styles.boxBtn }>
                    <Button 
                        style={ styles.btn}
                        mode="contained"
                        onPress={ () => getProductosByCategory('faciales')  }
                    >
                Faciales
                    </Button> 
                </View>

                <View style={ styles.boxBtn }>
                    <Button 
                        style={ styles.btn}
                        mode="contained"
                    >
                Muestra
                    </Button> 
                </View>
            </View>


            <FlatList 
                data={ productos }
                keyExtractor={ item => (item.codigo).toString()  }
                renderItem={ ({item}) => (
                    <List.Item 
                        style={ styles.list }
                        titleStyle={ styles.listTitle }
                        descriptionStyle={ styles.listText }
                        title={ item.codigo } 
                        description={ item.descripcion }
                        onPress={ () => navigation.navigate( 'Product', { item } ) }
                    />
                )}
            />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },  
    boxBtn: {
        marginBottom: 10,
        width: '49%',
    },
    btn: {
        backgroundColor: '#E65A0F',
        height: 45,
    },
    btnSearch: {
        backgroundColor: 'teal',
        marginBottom: 10
    },
    list: {
        backgroundColor: '#6C8E76',
        borderRadius: 10,
        marginBottom: 5,
    },
    listTitle: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    listText: {
        color: '#FFF',
        fontSize: 20,
        textTransform: 'capitalize',
    }
});

export default Categories;