import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../firebase';
import { Platform } from 'react-native';


export default function SignUp() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');

    const getMsgColor = () => {
        if (msg.includes('Usuário autenticado')) {
            return '#BFF49F';
        } else {
            return '#FF9352';
        }
    }

    function checkUser() {
        setIsLoading(true);
        const auth = getAuth(firebase);
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(userCredential => setMsg('Usuário autenticado'))
            .catch((error) => { setMsg("Ocorreu um erro ao tentar entrar!")}) 
            .finally(() => setIsLoading(false)); 
    }

    return (
        <>
            { 
                isLoading ? <ActivityIndicator /> :
                <View style={styles.container}>
                    <View style={styles.containerInside}>
                        <View style={styles.w100}>
                            <Text>Email</Text>
                            <TextInput value={userEmail} onChangeText={text => setUserEmail(text)}  style={styles.input}/>
                        </View>
                        <View>
                            <Text>Senha</Text>
                            <TextInput value={userPassword} onChangeText={text => setUserPassword(text)} secureTextEntry={true} style={styles.input}/> 
                        </View>
                        <View style={styles.btnLabel}>
                            <Pressable style={styles.btn} onPress={checkUser}>
                                <Text style={styles.btnLabel}>Acessar</Text>
                            </Pressable>
                        </View>
                        {msg ? (
                            <View style={[styles.containerMsg, {backgroundColor: getMsgColor()}]}>
                                <Text style={styles.msg}>{msg}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: '#FCF8EE'
    },
    containerInside: {
        width: '50%', 
        display: 'flex', 
        gap: 30, 
        padding: 20,
        backgroundColor: 'white',
        ...Platform.select({
            android: {
                width: '90%',
            },
        })
    },
    w100: {
        width: '100%'
    },
    input: {
        borderColor: '#DE9A0B', 
        borderWidth: 2, width: '100%', 
        paddingVertical: 5,
        marginTop: 10,
        paddingHorizontal: 5
    },
    btn: {
        paddingVertical: 10,
        backgroundColor:'#F9D076',
    },
    btnLabel: {
        textAlign: 'center',
    },
    containerMsg: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    }
});
