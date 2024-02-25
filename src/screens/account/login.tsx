// src/pages/LoginScreen.js
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useAuth} from 'context/authContext';
import {useTheme} from "theme/index";

export const LoginScreen = () => {
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signIn} = useAuth();

    const handleLogin = () => {
        signIn({username, password: password});
    };

    return (
        <View style={[styles.outerContainer,]}>
            <View style={[styles.innerContainer]}>
                <Text style={styles.title}>Create Account or Login</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Button title="Login" onPress={handleLogin}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: "center", // Align children vertically in the center
        alignItems: "center", // Align children horizontally in the center
    },
    innerContainer: {},
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center', // Center the text horizontally
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        padding: 10,
        marginBottom: 20,
        textAlign: 'center', // Center the text inside the TextInput horizontally
    },
});


