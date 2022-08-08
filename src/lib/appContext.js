import { createContext, useState, useContext, useRef } from 'react';

import { setSessionStorageItem, getSessionStorageItem } from './sessionStorage';

const AppContext = createContext();

export function AppContextWrapper({children}) {
    const [loading, setLoading] = useState(false);
    // track pages in site
    const pages = useRef([]);

    const scrollTo = selector => {
        console.log(`[appContext/scrollTo] scrolling to ${selector}`);

        const element = document.querySelector(selector);
        const rect = element.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const absoluteY = scrollTop + rect.top;

        window.scroll({
            top: absoluteY,
            behavior: "smooth"
        });
    };

    const scrollToPage = pageIndex => {
        const page = pages.current[pageIndex];

        console.log(`[appContext/scrollToPage] Page: ${page}`);

        scrollTo(`#${page}`);
    }

    // scroll up (left) a page
    const scrollUp = () => {
        let currPage = getCurrentPage();
        scrollToPage(--currPage);
        setCurrentPage(currPage);
    }

    // scroll down (right) a page
    const scrollDown = () => {
        let currPage = getCurrentPage();
        scrollToPage(++currPage);
        setCurrentPage(currPage);
    }

    const updatePages = newPages => pages.current = newPages;

    // concat returns new array without modifying pages, so update state works
    const addPage = page => pages.current = pages.concat(page);

    // filter returns new array without page
    const removePage = page => pages.current = pages.filter(p => p !== page);

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
        scrollToPage,
        scrollUp,
        scrollDown,
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