import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../firebase';

export default function SignUp() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');

    function checkUser() {
        setIsLoading(true);
        const auth = getAuth(firebase);
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then(userCredential => setMsg("Usuário válido"))
            .catch(error => setMsg(error.message)) 
            .finally(() => setIsLoading(false)); 
    }

    return (
        <>
            { 
                isLoading ? <ActivityIndicator /> :
                <View>
                    <Text>Email</Text>
                    <TextInput value={userEmail} onChangeText={text => setUserEmail(text)} />
                    <Text>Senha</Text>
                    <TextInput value={userPassword} onChangeText={text => setUserPassword(text)} secureTextEntry={true} /> 
                    <View style={Platform.OS == "web" ? styles.btn : styles.btnLabel}>
                        <Pressable style={styles.btn} onPress={checkUser}>
                            <Text style={styles.btnLabel}>Acessar</Text>
                        </Pressable>
                    </View>
                </View>
            }
             {msg && <Text>{msg}</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    btn: {
        margin: 10,
        padding: 2,
        backgroundColor: Platform.OS == "android" ? 'yellow' : 'pink',
    },
    btnLabel: {
        textAlign: 'center',
    }
});
