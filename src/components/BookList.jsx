import { StyleSheet, ScrollView, Dimensions, View } from 'react-native'
import CardBook from './CardBook'


export default function BookList({books, navigation}) {
    const { height, width } = Dimensions.get('window');
    const numColumns = width < height ? 1 : 3;

    function onClickBook(book) {
        navigation.navigate('DetailsBook', {book})
    }
    
    return (
        <ScrollView style={styles.position}>
            <View style={styles.postionCard}>
                {books.map(item => (
                    <View key={item.id} style={[styles.containerCard, {width: `${100 / numColumns}%`}]}>
                        <CardBook book={item} action={onClickBook}/>
                    </View>
                ))}
             </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    position: {
        height: '100%',
        marginTop: 100,
        marginBottom: 20,
        marginHorizontal: 30,
    },
    postionCard: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        height: '100%',
    },
    containerCard: { 
        display: 'flex', 
        padding: '10px',
    }
})   