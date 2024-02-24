import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegistrationPage = () => {
    return (
        <View style={styles.container}>
            <Text>Registration Form</Text>
            {/* Form fields */}
            <Button title="Register" onPress={() => {}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RegistrationPage;
