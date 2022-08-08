import { useEffect, useRef } from 'react';

import Page from './page';
import MainPage from './pages/mainPage';
import { useAppContext } from '../lib/appContext';
import { getSessionStorageItem, setSessionStorageItem } from '../lib/sessionStorage';

import './App.scss';

function App() {
    const context = useAppContext();
    const appRef = useRef(null);
    const currPageIndex = useRef(0);

    const pages = ['page1', 'page2', 'page3'];

    const updatePageSessionStorage = () => setSessionStorageItem('currentPage', currPageIndex.current);

    const scrollUp = () => {
        context.scrollTo(`#${pages[--currPageIndex.current]}`);
        updatePageSessionStorage();
    }

    const scrollDown = () => {
        context.scrollTo(`#${pages[++currPageIndex.current]}`);
        updatePageSessionStorage();
    }

    const wheelHandler = e => {
        e.preventDefault();

        currPageIndex.current = +getSessionStorageItem('currentPage');

        if (e.deltaY < 0) { // scroll up
            // can't scroll up any farther if at top page
            if (currPageIndex.current > 0) {
                scrollUp();
            }
        } else if (e.deltaY > 0) { // scroll down
            // cant scroll down if at bottom page
            if (currPageIndex.current !== pages.length - 1) {
                scrollDown();
            }
        }
    }

    // when app mounts
    useEffect(() => {

        let currentRef = null;

        if (appRef.current) {
            currentRef = appRef.current;
            currentRef.addEventListener('wheel', wheelHandler, { passive: false });
        }

        // get the sessionstorage for the current page index
        // + to convert into number
        currPageIndex.current = +getSessionStorageItem('currentPage')
        // if null, set and save 0
        if (!currPageIndex.current) {
            currPageIndex.current = 0;
            updatePageSessionStorage();
        }
        // scroll to current page
        context.scrollTo(`#${pages[currPageIndex.current]}`);

        // when app unmounts
        return () => {
            if (currentRef)
                currentRef.removeEventListener('wheel', wheelHandler, { passive: false });
        }
    }, []);

    return (
        <div className="App" ref={appRef}>
            <Page id='page1'>
                <MainPage/>
            </Page>
            <Page id='page2'/>
            <Page id='page3'/>
        </div>
    );
}

export default App;
