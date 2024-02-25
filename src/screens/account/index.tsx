import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useAuth} from "context/authContext";
import {useTheme} from "theme/index";
import {StackNavigationProp} from "@react-navigation/stack";
import {AppStackParamList} from "stack/types";

interface AccountPageProps {
    navigation: StackNavigationProp<AppStackParamList, "Account">
}

export const AccountPage: React.FC<AccountPageProps> = ({navigation}) => {
    const {user} = useAuth()
    const theme = useTheme()

    useEffect(() => {
        if (user === null) {
            navigation.navigate("Landing"); // Replace "LandingPage" with the correct route name if different
        }
    }, [user, navigation]);

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={[styles.innerContainer, {backgroundColor: theme.background}]}>
                <View style={[styles.centerRow]}>
                    <Image source={{uri: user?.profileImage}} style={styles.image} resizeMode="contain"/>
                </View>
                <View style={[styles.centerRow]}>
                    <Text style={[styles.text, {color: theme.text}]}>{user?.username}</Text>
                </View>
                <View style={[styles.centerRow]}>
                    <Text style={[styles.text, {color: theme.text}]}>{user?.email}</Text>
                </View>
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
    centerRow: {
        flexDirection: "row",
        justifyContent: 'center',
        padding: 10
    },
    text: {
        fontSize: 24
    },
    image: {
        width: 150, // Image takes half the width
        height: 150, // Image takes full height
        marginRight: 10,
        borderRadius: 10, // Adjust as needed
    },
});

