import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsPage = () => {
    return (
        <View style={styles.container}>
            <Text>History of Soccer Club</Text>
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

export default AboutUsPage;
