// EventList.js
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useTheme} from "../config/themeProvider";
import Event from './event';
import LoadingPage from "../components/loading";
import {defaultEvents} from "../res/testEvents"; // Import the Event component

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setEvents(defaultEvents);
            setIsLoading(false);
        }, 1000)
    }, []);

    let body;
    if (isLoading) {
        body = <LoadingPage/>;
    } else {
        body = (
            <ScrollView style={[styles.scrollView, {width: theme.appWidth}]}>
                {events.map(event => {
                    return < Event key={event.id} event={event}/>
                })}
            </ScrollView>
        )
    }
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={[styles.title, {color: theme.text}]}>Upcoming</Text>
            {body}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    scrollView: {},
    title: {
        fontSize: 24,
        padding: 10
    }
});

export default EventList;
