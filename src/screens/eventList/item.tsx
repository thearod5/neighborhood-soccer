// Event.js
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from "theme/index";
import {Event} from "src/domain/event"
import {AppStackParamList} from "stack/types";
import {StackNavigationProp} from "@react-navigation/stack";

interface EventListItemProps {
    navigation: StackNavigationProp<AppStackParamList, 'EventList'>;
    event: Event;
}

export const EventListItem: React.FC<EventListItemProps> = ({navigation, event}) => {
    const theme = useTheme();
    return (
        <TouchableOpacity
            style={styles.eventContainer}
            onPress={() => navigation.navigate('Event', {event})}// Navigate and pass event ID or other necessary data
        >
            <Image source={{uri: event.imageUri}} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{event.title}</Text>
                <Text style={styles.details}>{event.location} @ {event.startTime}-{event.endTime}</Text>
                <Text style={styles.details}>{event.description}</Text>
                <Text style={styles.details}>Spots Left: {event.spotsLeft}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    eventContainer: {
        flexDirection: 'row',
        width: '100%', // Set the width to 300px
        height: '75%', // I Set the height to 100px
        marginBottom: 10,
        backgroundColor: '#f0f0f0', // Example background color
        borderRadius: 5
    },
    image: {
        flex: 1,
        borderRadius: 5,
        margin: 10
    },
    detailsContainer: {
        flex: 2,
        padding: 5
    },
    title: {
        fontWeight: 'bold',
    },
    details: {
        fontSize: 12,
    },
});


