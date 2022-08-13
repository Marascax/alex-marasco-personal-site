import { useEffect, useRef } from 'react';

import Page from './page';
import MainPage from './pages/mainPage/mainPage';
import { useAppContext } from '../lib/appContext';

import './App.scss';

function App() {
    const context = useAppContext();
    const appRef = useRef(null);
    const currPageIndex = useRef(0);

    const pages = ['page1', 'page2', 'page3'];

    // const updatePageSessionStorage = () => context.setCurrentPage(currPageIndex.current);

    // const scrollUp = () => {
    //     context.scrollTo(`#${pages[--currPageIndex.current]}`);
    //     updatePageSessionStorage();
    // }

    // const scrollDown = () => {
    //     context.scrollTo(`#${pages[++currPageIndex.current]}`);
    //     updatePageSessionStorage();
    // }

    const wheelHandler = e => {
        e.preventDefault();

        currPageIndex.current = context.getCurrentPage();

        if (e.deltaY < 0) { // scroll up
            // can't scroll up any farther if at top page
            if (currPageIndex.current > 0) {
                context.scrollUp();
            }
        } else if (e.deltaY > 0) { // scroll down
            // cant scroll down if at bottom page
            if (currPageIndex.current !== pages.length - 1) {
                context.scrollDown();
            }
        }
    }

    // when app mounts
    useEffect(() => {
        // once mounted get app element and add wheel handler
        let currentRef = null;

        if (appRef.current) {
            currentRef = appRef.current;
            currentRef.addEventListener('wheel', wheelHandler, { passive: false });
        }

        // add the current pages to our context
        context.updatePages(pages);

        currPageIndex.current = context.getCurrentPage();

        // scroll to current page
        // context pages state may not have updated yet, so scroll to page with manual selector
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
