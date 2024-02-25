// Define public screens
import {LandingScreen} from "screens/landing";
import {LoginScreen} from "screens/account/login";
import {ScreenConfig} from "./types";
import {AboutUsPage} from "screens/aboutus";

export const PublicScreens: Record<string, ScreenConfig> = {
    Landing: {
        name: "Landing",
        component: LandingScreen,
        options: {title: 'Getting Started'}
    },
    Login: {
        name: "Login",
        component: LoginScreen,
        options: {title: 'Account'}
    },
    About: {
        name: "About",
        component: AboutUsPage,
        options: {title: 'About Us'}
    }
};