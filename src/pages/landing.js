import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../config/themeProvider';

const LandingPage = ({navigation}) => {
    const theme = useTheme();
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Image source={require('../../assets/logo-transparent.png')} style={styles.logo}/>
            <Text style={[styles.textStyle, {color: theme.text}]}>Neighborhood Soccer</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Get Started"
                    onPress={() => navigation.navigate('Login')}
                    color={theme.button} // Adjust this as needed based on your theme
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, // Adds padding around the outer View for better spacing
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30, // Adds space below the logo
    },
    textStyle: {
        fontSize: 24, // Increased font size for better readability
        fontWeight: 'bold',
        marginBottom: 20, // Adds space below the text
    },
    buttonContainer: {
        width: 200, // Sets a width for the button for better control
        marginTop: 20, // If needed, adjust for spacing above the button
    },
});

export default LandingPage;