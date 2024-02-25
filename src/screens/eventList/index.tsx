// List.js
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Theme, useTheme} from "theme/index";
import {EventListItem} from './item';
import LoadingPage from "components/common/loading";
import {defaultEvents} from "testData/testEvents"; // Import the Event component
import {Event} from "src/domain/event"
import {StackNavigationProp} from "@react-navigation/stack";
import {AppStackParamList} from "stack/types";

interface EventListProps {
    navigation: StackNavigationProp<AppStackParamList, 'EventList'>;
}

export const EventList: React.FC<EventListProps> = ({navigation}) => {
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const theme: Theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            setEvents(defaultEvents);
            setIsLoading(false);
        }, 300)
    }, []);

    let body;
    if (isLoading) {
        body = <LoadingPage/>;
    } else {
        body = (
            <ScrollView style={[styles.scrollView]}>
                {events.map(event => {
                    return (< EventListItem key={event.id} event={event} navigation={navigation}/>)
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
    scrollView: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 24,
        padding: 10
    }
});

