// Define authenticated screens
import {EventList} from "screens/eventList";
import {EventPage} from "screens/event";
import {AccountPage} from "screens/account";
import {EventRegistrationPage} from "screens/registration/registration";
import {ScreenConfig} from "./types";

export const AuthScreens: Record<string, ScreenConfig> = {
    EventList: {
        name: "List",
        component: EventList,
        options: {title: 'Neighborhood Soccer'}
    },
    Account: {
        name: "Account",
        component: AccountPage,
        options: {title: 'User Profile'}
    },
    Event: {
        name: "Event",
        component: EventPage,
        options: {title: 'Event Details'}
    },
    EventRegistration: {
        name: "EventRegistration",
        component: EventRegistrationPage,
        options: {title: "Register for Event"}
    }
};