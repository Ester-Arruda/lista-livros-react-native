import { useState, useEffect } from "react"
import { StyleSheet, FlatList, Dimensions, View, Image  } from 'react-native';

import firebase from '../../firebase'
import { getStorage, listAll, ref, getDownloadURL } from 'firebase/storage'

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;

export default function GalleryPage() {
    const [photos, setPhotos] = useState([])

    async function getPhotos() {
        try {
            const firebaseStorage = getStorage(firebase)
            const photoRef = ref(firebaseStorage)
            const list = await listAll(photoRef)
            const urls = [...photos]
            for(let fileRef of list.items) {
                const photoRef = ref(firebaseStorage, fileRef)
                const url = await getDownloadURL(photoRef)
                if(!urls.includes(url)) urls.push(url)
            }
            setPhotos(urls)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect( () => {
        getPhotos()
    }, [])

    const renderPhotoItem = ({ item }) => (
        <View style={styles.photoContainer}>
            <Image source={{ uri: item }} style={styles.photo} />
        </View>
    );

    return(
        <FlatList
            data={photos}
            renderItem={renderPhotoItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            contentContainerStyle={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    photoContainer: {
        margin: 2,
        width: screenWidth / numColumns - 4,
        height: screenWidth / numColumns - 4,
        backgroundColor: '#ccc',
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
    },
});