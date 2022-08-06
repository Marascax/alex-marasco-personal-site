import { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

export function AppContextWrapper({children}) {
    const [loading, setLoading] = useState(false);

    const scroll = (selector) => {
        const section = document.querySelector(selector);
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };


    let state = {
        loading,
        scroll
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