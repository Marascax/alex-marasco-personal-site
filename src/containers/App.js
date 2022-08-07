import { useEffect, useRef } from 'react';

import Page from './page';
import MainPage from './pages/mainPage';
import { useAppContext } from '../lib/appContext';
import { getSessionStorageItem, setSessionStorageItem } from '../lib/sessionStorage';

import './App.scss';

function App() {
    const context = useAppContext();
    const appRef = useRef(null);

    const pages = ['page1', 'page2', 'page3'];
    let currentPageIndex;

    const updatePageSessionStorage = () => setSessionStorageItem('currentPage', currentPageIndex);

    const scrollUp = () => {
        context.scroll(`#${pages[--currentPageIndex]}`);
        updatePageSessionStorage();
    }

    const scrollDown = () => {
        context.scroll(`#${pages[++currentPageIndex]}`);
        updatePageSessionStorage();
    }

    const wheelHandler = e => {
        e.preventDefault();

        if (e.deltaY < 0) { // scroll up
            // can't scroll up any farther if at top page
            if (currentPageIndex > 0) {
                scrollUp();
            }
        } else if (e.deltaY > 0) { // scroll down
            // cant scroll down if at bottom page
            if (currentPageIndex != pages.length - 1) {
                scrollDown();
            }
        }
    }

    // when app mounts
    useEffect(() => {
        appRef.current.addEventListener('wheel', wheelHandler, { passive: false });

        // get the sessionstorage for the current page index
        // + to convert into number
        currentPageIndex = +getSessionStorageItem('currentPage')
        // if null, set and save 0
        if (!currentPageIndex) {
            currentPageIndex = 0;
            updatePageSessionStorage();
        }
        // scroll to current page
        context.scroll(`#${pages[currentPageIndex]}`);

        // when app unmounts
        return () => {
            appRef.current.removeEventListener('wheel', wheelHandler, { passive: false });
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
