import { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import AppBar from '../components/AppBar';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function BookListPage({ navigation }) {
    const uri = 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json';
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        fetchData();
    }, [filter]);

    const fetchData = async () => {
        try {
            const response = await fetch(uri);
            const booksResponse = await response.json();
            const arrayBooks = Object.keys(booksResponse).map(key => ({
                id: key,
                ...booksResponse[key]
            }));
            if(filter && filter.length > 0) {
                const filteredList = filterBooks(arrayBooks);
                setBooks(filteredList);
            } else {
                setBooks(arrayBooks)
            }
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        } finally {
            setLoading(false);
        }
    };

    const filterBooks = (allBooks) => {
        if (filter.trim() !== '') {
            return allBooks.filter(book =>
                book.author.toLowerCase().includes(filter.toLowerCase()) ||
                book.title.toLowerCase().includes(filter.toLowerCase()) ||
                book.genre.toLowerCase().includes(filter.toLowerCase())
            );
        } else {
            return allBooks;
        }
    };

    const actionFilterBook = (value) => { setFilter(value); };

    return (
        <>
            <AppBar actionFilterBook={actionFilterBook} />
            {
                loading ? (
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                ) : (<BookList books={books} navigation={navigation} />)
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
