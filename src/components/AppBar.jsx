import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import { Platform } from 'react-native';



export default function Menu({ actionFilterBook }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (text) => {
        setSearchTerm(text);
        actionFilterBook(text);
    };

    return (
        <View style={styles.navbar}>
            <View style={[styles.alignElements, styles.gap, styles.containerBrand]}>
                <View style={styles.logoSpaces}>
                    <FontAwesome5 name="book" size={24} color="black" />
                    <Text style={styles.textBrand}>Bookers</Text>
                </View>
                {Platform.OS == "android" &&
                    <View style={styles.logoSpaces}>
                        <FontAwesome5 name="user" size={24} color="black" />
                        <Text style={styles.login}>Logar</Text>
                    </View>
                }
            </View>
            <View style={styles.alignElements}>
                <TextInput
                    placeholder='Busque um livro'
                    value={searchTerm}
                    onChangeText={handleSearchChange}
                    data-cy="search"
                    style={styles.input}
                />
                <View style={styles.containerIcon}>
                    <FontAwesome5 name="search" size={22} color="black" />
                </View>
            </View>
            {Platform.OS == "web" &&
                <View style={[styles.alignElements, styles.gap]}>
                    <FontAwesome5 name="user" size={24} color="black" />
                    <Text style={styles.login}>Logar</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'bisque',
        position: 'absolute',
        top: 0,
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        ...Platform.select({
            android: {
                flexDirection: 'column',
                height: 75,
            },
        })
    },
    alignElements: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gap: {
        gap: 15
    },
    logo_icon: {
        width: '55px',
        height: '55px',
    },
    textBrand: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    input: {
        height: 30,
        width: 300,
        borderRightWidth: 0,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        ...Platform.select({
            android: {
                marginBottom: 10,
            },
        })
    },
    icon_search: {
        backgroundColor: 'white',
        height: '30px',
        width: '40px',

    },
    icon_login: {
        height: '40px',
        width: '40px',
    },   
    login: {
        fontWeight: 'bold'
    },
    logoSpaces: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    containerBrand: {
        ...Platform.select({
            android: {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }
        }),
    },
    containerIcon: { 
        backgroundColor: 'white', 
        height: 30, 
        justifyContent: 'center', 
        marginBottom: 10
    }
})