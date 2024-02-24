import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../config/themeProvider';

const EventPage = ({route}) => {
    console.log("Route", route)
    const {event} = route.params; // Accessing the event data passed from the previous screen
    console.log("Event", event)
    const theme = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            {/* Displaying Event Image */}
            {event.imageUri && (
                <Image source={{uri: event.imageUri}} style={styles.image}/>
            )}
            {/* Displaying Event Title */}
            <Text style={[styles.title, {color: theme.text}]}>{event.title}</Text>
            {/* Displaying Event Location */}
            <Text style={[styles.details, {color: theme.text}]}>Location: {event.location}</Text>
            {/* Displaying Event Description */}
            <Text style={[styles.details, {color: theme.text}]}>Description: {event.description}</Text>
            {/* Displaying Event Times */}
            <Text style={[styles.details, {color: theme.text}]}>Start: {event.startTime} - End: {event.endTime}</Text>
            {/* Displaying Number of Spots Left */}
            <Text style={[styles.details, {color: theme.text}]}>Spots Left: {event.spotsLeft}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    details: {
        fontSize: 18,
        marginBottom: 5,
    },
});

export default EventPage;
