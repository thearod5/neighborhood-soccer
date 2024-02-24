// EventList.js
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useTheme} from "../config/themeProvider";
import Event from './event'; // Import the Event component

const events = [
    // Example events data
    {
        id: 1,
        imageUri: 'https://as1.ftcdn.net/v2/jpg/01/82/42/54/1000_F_182425403_3xPvzl7TXsPf1Z1Prn9OGAArwYgY7EB1.jpg',
        title: 'Local Soccer Match',
        location: 'Community Park',
        description: 'Friendly match at the local park.',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        spotsLeft: 5,
    },
    // Add more events here
];

const EventList = () => {
    const theme = useTheme();
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <ScrollView style={[styles.scrollView, {width: theme.appWidth}]}>
                {events.map(event => (
                    <Event key={event.id} event={event}/>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        border: '1px solid red',
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    scrollView: {
        border: '1px solid red'
    },
});

export default EventList;
