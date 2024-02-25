import {Image, StyleSheet, Text, View} from "react-native";
import {useTheme} from "theme/index";
import {defaultEvents} from "testData/testEvents";
import React from "react";
import CustomButton from "components/common/customButton";

function startPayment() {

}

export const EventRegistrationPage = () => {
    const event = defaultEvents[0]
    const theme = useTheme()
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={[styles.text, {color: theme.emphasis}]}>{event.title}</Text>
            <View style={[styles.centerRow]}>
                <Image source={{uri: event.imageUri}} style={styles.image}/>
            </View>
            <CustomButton
                customStyles={styles.button}
                onPress={startPayment}
                title={"Payment"}
                buttonColor={theme.primary}
                textColor={theme.text}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        height: '100%'
    },
    text: {
        fontSize: 24,
        alignContent: 'center'
    },
    image: {
        width: '50%',
        height: '50%'
    },
    title: {
        margin: 10,
        borderRadius: 5,
        height: '10%'
    },
    centerRow: {
        flexDirection: "row",
        alignContent: "center"
    },
    button: {}
});

