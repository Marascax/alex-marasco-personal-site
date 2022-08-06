import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export function AppContextWrapper({children}) {
    const [loading, setLoading] = useState(false);


    let state = {
        loading
    };

    return (
        <AppContext.Provider value={state}>
            { !loading && children }
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}