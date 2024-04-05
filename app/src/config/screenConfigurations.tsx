// Define authenticated screens
import { AccountEditScreen } from "screens/account/accountEdit";
import { AccountPage } from "screens/account/accountScreen";
import { AccountCreateScreen } from "screens/accountCreate/accountCreateScreen";
import { EventScreen } from "screens/event/eventScreen";
import { CreateEvent } from "screens/eventCreation/evenCreationScreen";
import { EventListScreen } from "screens/eventList/eventListScreen";
import { EventRegistrationScreen } from "screens/eventRegistration/eventRegistrationScreen";
import { EventUsersScreen } from "screens/eventUsers/evenUsersScreen";
import { LandingScreen } from "screens/landing/landingScreen";
import { LoginScreen } from "screens/login/loginScreen";

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
    options: { title: "Account Login" },
  },
  EventList: {
    name: "EventList",
    component: EventListScreen,
    options: { title: "Neighborhood Soccer" },
  },
  Account: {
    name: "Account",
    component: AccountPage,
    options: { title: "User Profile" },
  },
  AccountCreate: {
    name: "AccountCreate",
    component: AccountCreateScreen,
    options: { title: "Create Account" },
  },
  AccountEdit: {
    name: "AccountEdit",
    component: AccountEditScreen,
    options: { title: "Edit Account" },
  },
  Event: {
    name: "Event",
    component: EventScreen,
    options: { title: "Event Details" },
  },
  EventUsers: {
    name: "EventUsers",
    component: EventUsersScreen,
    options: { title: "Event Users" },
  },
  EventRegistration: {
    name: "EventRegistration",
    component: EventRegistrationScreen,
    options: { title: "Register for Event" },
  },
  EventCreation: {
    name: "EventCreate",
    component: CreateEvent,
    options: { title: "Create Event" },
  },
};

export type AppStackParamList = {
  // todo: generalize to use key above.
  Landing: undefined;
  Login: undefined;
  About: undefined;
  Account: undefined;
  AccountEdit: undefined;
  EventList: undefined;
  Event: { event: Event };
  EventUsers: undefined;
  EventRegistration: undefined;
  EventCreate: undefined;
};
