import { createContext, useState, useEffect, useContext } from 'react';

import { setSessionStorageItem, getSessionStorageItem } from './sessionStorage';

const AppContext = createContext();

export function AppContextWrapper({children}) {
    const [loading, setLoading] = useState(false);
    // track pages in site
    const [pages, setPages] = useState([]);

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

    const updatePages = newPages => setPages(newPages);

    // concat returns new array without modifying pages, so update state works
    const addPage = page => setPages(pages.concat(page));

    // filter returns new array without page
    const removePage = page => setPages(pages.filter(p => p != page))


    let state = {
        loading,
        scroll,
        updatePages,
        addPage,
        removePage
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