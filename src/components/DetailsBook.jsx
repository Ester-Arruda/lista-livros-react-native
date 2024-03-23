import { View, Image, Text, StyleSheet } from 'react-native';

export default function DetailsBook({ route  }) {
    const { book } = route.params

  return(
    <View style={styles.container}>
      <Image source={{ uri: book.cover}} style={{width: 209, height: 315}}/>
      <View style={styles.containerInfo}>
        <Text style={styles.bold}>Nome: <Text style={styles.italic}>{book.title}</Text></Text>
        <Text style={styles.bold}>Autor: <Text style={styles.italic}>{book.author}</Text></Text>
        <Text style={styles.bold}>Sinopse: <Text style={styles.italic}>{book.synopsis}</Text></Text>
        <Text style={styles.bold}>Páginas: <Text style={styles.italic}>{book.pages}</Text></Text>
        <Text style={styles.bold}>Editora: <Text style={styles.italic}>{book.publisher}</Text></Text>
        <Text style={styles.bold}>Ano de Publicação: <Text style={styles.italic}>{book.publication_year}</Text></Text>
        <Text style={styles.bold}>ISBN: <Text style={styles.italic}>{book.ISBN}</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF7E8'
  },
  containerInfo: {
    marginTop: 20,
    display: 'flex',
    gap: 12,
    width: '50%'
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
});