import { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera'

export default function RegisterImage() {
    const [cameraPermission, setCameraPermission] = useState(false)
    const [camera, setCamera] = useState(null)
    const [photoUri, setPhotoUri] = useState(null)

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

    return (
        <>
            <View style={styles.container}>
                {!photoUri && (
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
                        <Pressable style={styles.btnTakePicture} onPress={() => setPhotoUri(null)}>
                            <Text>Tirar Outra Foto</Text>
                        </Pressable>
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
