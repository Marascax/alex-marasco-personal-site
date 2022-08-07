import { createContext, useState, useEffect, useContext } from 'react';

import { enableScroll, disableScroll } from './scroll';

const AppContext = createContext();

export function AppContextWrapper({children}) {
    const [loading, setLoading] = useState(false);

    const scroll = (selector) => {
        console.log(`scrolling to ${selector}`);

        const element = document.querySelector(selector);
        const rect = element.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const absoluteY = scrollTop + rect.top;

        window.scroll({
            top: absoluteY,
            behavior: "smooth"
        });
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