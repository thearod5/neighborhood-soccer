import React from 'react';
import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    buttonColor?: string;
    textColor?: string;
    customStyles?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> =
    ({
         onPress,
         title,
         buttonColor = 'blue', // Provide default value if needed
         textColor = 'white', // Provide default value if needed
         customStyles = {}
     }) => {
        console.log("Styles", customStyles);
        return (
            <TouchableOpacity onPress={onPress}
                              style={[styles.button, customStyles, buttonColor ? {backgroundColor: buttonColor} : {}]}>
                <Text style={[styles.text, {color: textColor}]}>{title}</Text>
            </TouchableOpacity>
        );
    };

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomButton;
