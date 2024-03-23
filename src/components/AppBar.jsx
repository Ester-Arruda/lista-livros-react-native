import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'


export default function Menu({actionFilterBook}) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (evt) => {
    setSearchTerm(evt.target.value)
    actionFilterBook(evt.target.value)
  }

  return (
    <View style={styles.navbar}>
        <View style={[styles.alignElements, styles.gap]}>
            <AutoStoriesIcon style={styles.logo_icon}/>
            <Text style={styles.textBrand}>Bookers</Text>
        </View>
        <View style={styles.alignElements}>
            <TextInput placeholder='Busque um livro' value={searchTerm} onChange={handleInputChange} data-cy="search" style={styles.input}/>
            <SearchIcon style={styles.icon_search}/>
        </View>
        <View style={[styles.alignElements, styles.gap]}>
            <AccountCircleIcon style={styles.icon_login}/>
            <Text>Logar</Text>
        </View>
    </View>
  )
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
        paddingHorizontal: 40
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
})
