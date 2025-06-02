import React from 'react';
import { useStorageState } from './useStorageState';

const AuthContext = React.createContext<{
  signIn: (val: string) => void;
  setTheme: (val: "light" | "dark") => void;
  setToken: (val: string) => void;
  theme: "light" | "dark" | null;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
  pushToken: string | null;
  isLoadingTheme: boolean;
}>({
    signIn: () => null,
    signOut: () => null,
    theme: "light",
    setToken: () => null,
    setTheme: () => null,
    session: null,
    pushToken: null,
    isLoading: false,
    isLoadingTheme: false,
});

// This hook can be used to access the user info.
export function useSession() {
    const value = React.useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState<string>('session');
    const [[isLoadingTheme, theme], setTheme] = useStorageState<"light" | "dark" | null>('theme');
    const [[_is,token],setToken] = useStorageState<string>('token');
    const value = {
        signIn: (val: string) => {
            setSession(val);
        },
        setToken,
        pushToken: token,
        theme,
        setTheme: (val: "light" | "dark") => {
            setTheme(val);
        },
        signOut: () => {
            setSession(null);
        },
        session,
        isLoading,
        isLoadingTheme,
    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}
