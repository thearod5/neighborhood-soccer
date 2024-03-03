// Define authenticated screens
import { AboutUsPage } from "screens/aboutus";
import { AccountPage } from "screens/account";
import { LoginScreen } from "screens/account/login";
import { CreateEvent } from "screens/eventCreation";
import { EventPage } from "screens/event";
import { EventList } from "screens/eventList";
import { EventUsers } from "screens/eventUsers";
import { LandingScreen } from "screens/landing";
import { EventRegistrationPage } from "screens/eventRegistration";

export interface ScreenConfig {
  name: string;
  component: React.ComponentType<any>;
  options: { title: string; headerRight?: () => JSX.Element };
}

export const AppScreens: Record<string, ScreenConfig> = {
  Landing: {
    name: "Landing",
    component: LandingScreen,
    options: { title: "Home" },
  },
  Login: {
    name: "Login",
    component: LoginScreen,
    options: { title: "Account" },
  },
  About: {
    name: "About",
    component: AboutUsPage,
    options: { title: "About Us" },
  },
  EventList: {
    name: "EventList",
    component: EventList,
    options: { title: "Neighborhood Soccer" },
  },
  Account: {
    name: "Account",
    component: AccountPage,
    options: { title: "User Profile" },
  },
  Event: {
    name: "Event",
    component: EventPage,
    options: { title: "Event Details" },
  },
  EventUsers: {
    name: "EventUsers",
    component: EventUsers,
    options: { title: "Event Users" },
  },
  EventRegistration: {
    name: "EventRegistration",
    component: EventRegistrationPage,
    options: { title: "Register for Event" },
  },
  EventCreation: {
    name: "EventCreate",
    component: CreateEvent,
    options: { title: "Create Event" },
  },
};

export type AppStackParamList = {
  Landing: undefined;
  Login: undefined;
  About: undefined;
  EventList: undefined;
  Account: undefined;
  Event: { event: Event };
  EventUsers: undefined;
  EventRegistration: undefined;
  EventCreation: undefined;
};
