import {Event} from "src/domain/event"
import React from "react";

export interface ScreenConfig {
    name: string;
    component: React.ComponentType<any>;
    options: { title: string; headerRight?: () => JSX.Element };
}

export type AppStackParamList = {
    Landing: undefined;
    Login: undefined;
    Account: undefined;
    Event: { event: Event };
    EventList: undefined;
    EventRegistration: undefined;
};