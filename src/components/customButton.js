import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, title, buttonColor, textColor}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor: buttonColor}]}>
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton