import React, {createContext, useContext, useState} from 'react';

const defaultUser = {
    username: "thearod5",
    password: "photo"
}
const AppAuthContext = createContext();

export const useAuth = () => useContext(AppAuthContext);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); // null when not logged in

    const signIn = (userData) => {
        // Implement your sign-in logic here, then set the user
        setUser(userData);
    };

    const signOut = () => {
        // Implement your sign-out logic here, then unset the user
        setUser(null);
    };

    return (
        <AppAuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AppAuthContext.Provider>
    );
};
