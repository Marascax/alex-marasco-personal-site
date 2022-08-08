import { createContext, useState, useContext } from 'react';

import { setSessionStorageItem, getSessionStorageItem } from './sessionStorage';

const AppContext = createContext();

export function AppContextWrapper({children}) {
    const [loading, setLoading] = useState(false);
    // track pages in site
    const [pages, setPages] = useState([]);

    const scrollTo = (selector) => {
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
    const removePage = page => setPages(pages.filter(p => p !== page));

    const getCurrentPage = () => {
        // get the sessionstorage for the current page index
        // + to convert into number
        let currPage = +getSessionStorageItem('currentPage');
        // if no current page set, set and save 0
        if (!currPage) {
            currPage = 0;
            setSessionStorageItem('currentPage', '0');
        }
        return currPage;
    }

    const setCurrentPage = currPage => setSessionStorageItem('currentPage', currPage);


    let state = {
        loading,
        scrollTo,
        updatePages,
        addPage,
        removePage,
        getCurrentPage,
        setCurrentPage
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