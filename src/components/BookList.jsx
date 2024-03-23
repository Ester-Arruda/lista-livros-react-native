import { StyleSheet, ScrollView } from 'react-native'
import CardBook from './CardBook'


export default function BookList({books, navigation}) {
    function onClickBook(book) {
        navigation.navigate('DetailsBook', {book})
    }
    
    return (
        <ScrollView style={styles.position}>
            {books.map(item => (
                <CardBook key={item.id} book={item} action={onClickBook} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    position: {
        marginTop: 100,
        marginBottom: 20,
        marginHorizontal: 30,
    },
})   