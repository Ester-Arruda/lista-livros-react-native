/* eslint-disable react/prop-types */
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Platform } from 'react-native';

export default function CardBook({book, action}) {
    return (
        <Pressable onPress={() => action(book)}>
            <View style={styles.container}>
                <Image source={{ uri: book.cover}} style={{width: 100, height: 164}}/>
                <View data-cy="book-info" style={styles.containerIfos}>
                    <Text>
                        Nome: {book.title}
                    </Text>
                    <Text>
                        Autor: {book.author}
                    </Text>
                    <Text>
                        Gênero: {book.genre}
                    </Text>   
                    <Text>
                        Idioma: {book.language}
                    </Text>   
                    <Text>
                        Páginas: {book.pages}
                    </Text>
                    <Text>
                        Ano de Publicação: {book.publication_year}
                    </Text>   
                    <Text>
                        Editora: {book.publisher}
                    </Text>
                    <Text>
                        Sinopse: {book.synopsis}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 4,
        padding: 2,
        backgroundColor: '#FCF8EE',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        elevation: 1,
        ...Platform.select({
            android: {
                justifyContent: 'center',
                height: 'fit-content',
                flexWrap: 'wrap'
            },
        })
    },
    containerIfos: {
        paddingHorizontal: 16,
        textAlign: 'center',
        justifyContent: 'center',
    },
})