import { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera'

import firebase from '../../firebase'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

export default function RegisterImage() {
    const [cameraPermission, setCameraPermission] = useState(false)
    const [camera, setCamera] = useState(null)
    const [photoUri, setPhotoUri] = useState(null)
    const [msg, setMsg] = useState(null)

    useEffect(() => {
        getCameraPermission()
    }, [])

    const getCameraPermission = async () => {
        const permission = await Camera.requestCameraPermissionsAsync()
        if (permission.status === 'granted') {
            setCameraPermission(true)
        }
    }

    const takeAPicture = async () => {
        if (camera) {
            const picture = await camera.takePictureAsync()
            setPhotoUri(picture.uri)
        }
    }

    async function savePhoto() {
        try {
            const firebaseStorage = getStorage(firebase)
            const name = `photos${new Date()}.jpeg`
            const photoRef = ref(firebaseStorage, name)
            uploadPhoto(photoRef)
        }
        catch(error) {
            setMsg(error.message)
        }
    }

    async function uploadPhoto(photoRef) {
        const response = await fetch(photoUri)
        const photo = await response.blob()
        const uploadResult = await uploadBytes(photoRef, photo)
        if (uploadResult) setPhotoUri(null)
        else setMsg('algo deu errado')
    }

    return (
        <>
            <View style={styles.container}>
                {cameraPermission && !photoUri && (
                    <>
                        <View style={styles.cameraContainer}>
                            <Camera style={styles.camera} ref={(refCamera) => setCamera(refCamera)} type={Camera.Constants.Type.back} />
                        </View>
                        <Pressable style={styles.btnTakePicture} onPress={() => takeAPicture()}>
                            <Text>Tirar Foto</Text>
                        </Pressable>
                    </>
                )}
                {photoUri && (
                    <>
                        <Image source={{ uri: photoUri }} style={styles.photoTakePicture} />
                        <View>
                            <Pressable style={[styles.btnTakePicture, {left: 100}]} onPress={() => savePhoto()}>
                                <Text>Salvar</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable style={[styles.btnTakePicture, {left: -100}]} onPress={() => setPhotoUri(null)}>
                                <Text>Deletar</Text>
                            </Pressable>
                        </View>
                    </>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    camera: {
        width: '80%',
        aspectRatio: 1,
    },
    photoTakePicture: {
        flex: 1,
        height: '50%',
        width: '50%',
    },
    btnTakePicture: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5
    }
})
