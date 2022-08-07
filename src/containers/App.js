import { useEffect, useRef } from 'react';

import Page from './page';
import { useAppContext } from '../lib/appContext';
import { disableScroll } from '../lib/scroll';

import './App.scss';

function App() {
    const context = useAppContext();
    const appRef = useRef(null);

    const pages = ['page1', 'page2', 'page3'];
    let currentPageIndex;

    const scrollUp = () => {
        context.scroll(`#${pages[--currentPageIndex]}`);
    }

    const scrollDown = () => {
        context.scroll(`#${pages[++currentPageIndex]}`);
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
        currentPageIndex = +window.sessionStorage.getItem('currentPage');
        // if null, set and save 0
        if (!currentPageIndex) {
            currentPageIndex = 1;
            window.sessionStorage.setItem('currentPage', '0')
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
            <Page id='page1'/>
            <Page id='page2'/>
            <Page id='page3'/>
        </div>
    );
}

export default App;
