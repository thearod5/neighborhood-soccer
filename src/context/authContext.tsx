import React, {createContext, ReactNode, useContext, useState} from 'react';

interface User {
    username: string;
    email: string;
    profileImage?: string;
}

interface UserLogin {
    username: string; // email or username
    password: string;
}

const defaultUser: User = {
    username: "thearod5",
    email: "vhsalbertorodriguez@mgmail.com",
    profileImage: "https://media.licdn.com/dms/image/D5603AQEyXOMfuUFWtA/profile-displayphoto-shrink_200_200/0/1696635157271?e=1714003200&v=beta&t=oRXZYr6mFRmxi5iFNKR2_MnAsn_p0cJvabgO8aGmYV0"
};

export interface AuthContextType {
    user: User | null;
    signIn: (userData: UserLogin) => void;
    signOut: () => void;
}

const AppAuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AppAuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(defaultUser); // null when not logged in

    const signIn = (userData: UserLogin) => {
        setTimeout(() => {
            // TODO: Implement sign-in logic here.
            setUser(defaultUser);
        }, 300);
    };

    const signOut = () => {
        setTimeout(() => {
            // TODO: Implement sign-out logic here.
            setUser(null);
        }, 300);
    };

    return (
        <AppAuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AppAuthContext.Provider>
    );
};
