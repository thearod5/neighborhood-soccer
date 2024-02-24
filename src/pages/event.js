// Event.js
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from "../config/themeProvider";
import {useNavigation} from '@react-navigation/native';

const Event = ({event}) => {
    const theme = useTheme();
    const navigation = useNavigation(); // Hook to access navigation
    return (
        <TouchableOpacity
            style={styles.eventContainer}
            onPress={() => navigation.navigate('EventPage', {event: event})}// Navigate and pass event ID or other necessary data
        >
            <Image source={{uri: event.imageUri}} style={styles.image} resizeMode="contain"/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.details}>{event.description}</Text>
                <Text style={styles.details}>{event.location} @ {event.startTime}-{event.endTime}</Text>
                <Text style={styles.details}>Spots Left: {event.spotsLeft}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    eventContainer: {
        flexDirection: 'row',
        width: '100%', // Set the width to 300px
        height: 200, // Set the height to 100px
        marginBottom: 10,
        backgroundColor: '#f0f0f0', // Example background color
        borderRadius: 10,
        padding: 10
    },
    image: {
        width: '50%', // Image takes half the width
        height: '100%', // Image takes full height
        marginRight: 10,
        borderRadius: 10, // Adjust as needed
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'space-around', // Spread out the text items vertically
        padding: 5, // Add padding around the text for better readability
    },
    title: {
        fontWeight: 'bold',
    },
    details: {
        fontSize: 12,
    },
});


export default Event;
