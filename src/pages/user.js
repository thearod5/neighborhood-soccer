import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAuth} from "../context/authContext";
import {useTheme} from "../config/themeProvider";

const UserPage = () => {
    const {user} = useAuth()
    const theme = useTheme()

    return (
        <View style={[styles.container, {background: theme.background}]}>
            <View style={[styles.innerContainer, {background: theme.background}]}>
                <Text style={[styles.text, {color: theme.text}]}>{user.username}</Text>
                <Text style={[styles.text, {color: theme.text}]}>{user.email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
    },
    innerContainer: {
        padding: 10,
        flexDirection: 'column'
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    text: {
        fontSize: 24
    }
});

export default UserPage;
