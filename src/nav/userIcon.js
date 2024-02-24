import {Icon} from "react-native-elements";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {useAuth} from "../context/authContext";
import {StyleSheet, View} from "react-native";

const UserIcon = () => {
    const {user} = useAuth()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Icon name="account-circle" size={35} onPress={() => {
                navigation.navigate('UserPage', {user: user})
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
});
export default UserIcon;