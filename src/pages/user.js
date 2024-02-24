import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserPage = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'profile_picture_url' }} style={styles.profilePic} />
            <Text>First and Last Name</Text>
            <Text>Description</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default UserPage;
