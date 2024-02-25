import {Icon} from "react-native-elements";
import React from "react";
import {StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {AppStackParamList} from "stack/types";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";


const UserIcon: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
    return (
        <View style={styles.container}>
            <Icon name="account-circle" size={35} onPress={() => {
                navigation.navigate('Account')
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