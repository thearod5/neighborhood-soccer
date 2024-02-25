import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'theme/index';
import CustomButton from "components/common/customButton";
import {Event} from "src/domain/event"
import {StackNavigationProp} from "@react-navigation/stack";
import {AppStackParamList} from "stack/types";

// Define the props expected by this component. Adjust if your route params are different.
interface IndexProps {
    route: {
        params: {
            event: Event;
        };
    };
    navigation: StackNavigationProp<AppStackParamList, 'Event'>;
}

export const EventPage: React.FC<IndexProps> = ({navigation, route}) => {
    const {event} = route.params; // Accessing the event data passed from the previous screen
    const theme = useTheme();

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Image source={{uri: event.imageUri}} style={styles.image}/>
            <Text style={[styles.title, {color: theme.text}]}>{event.title}</Text>
            <Text style={[styles.details, {color: theme.text}]}>Location: {event.location}</Text>
            <Text style={[styles.details, {color: theme.text}]}>Description: {event.description}</Text>
            <Text style={[styles.details, {color: theme.text}]}>Start: {event.startTime} - End: {event.endTime}</Text>
            <Text style={[styles.details, {color: theme.text}]}>Spots Left: {event.spotsLeft}</Text>
            <CustomButton title="Register"
                          onPress={() => navigation.navigate("EventRegistration")}
                          customStyles={styles.registerButton}
                          buttonColor={theme.primary}
                          textColor={theme.text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    registerButton: {
        width: '100%',
        height: 50
    }
});


