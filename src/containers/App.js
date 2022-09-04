import { useEffect, useRef } from 'react';

import Page from './page';
import MainPage from './pages/mainPage/mainPage';
import AboutMe from './pages/aboutMe/aboutMe';
import Education from './pages/education/education';
import WorkHistory from './pages/workHistory/workHistory';
import { useAppContext } from '../lib/appContext';

import './App.scss';

function App() {
    const context = useAppContext();
    const appRef = useRef(null);
    const currPageIndex = useRef(0);

    const pages = ['mainPage', 'aboutMe', 'education', 'workHistory'];

    const wheelHandler = e => {
        e.preventDefault();

        currPageIndex.current = context.getCurrentPage();

        if (e.deltaY < 0) {
            context.scrollUp();
        } else if (e.deltaY > 0) {
            context.scrollDown();
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
            <Page id='mainPage'>
                <MainPage/>
            </Page>
            <Page id='aboutMe'>
                <AboutMe/>
            </Page>
            <Page id='education'>
                <Education/>
            </Page>
            <Page id='workHistory'>
                <WorkHistory/>
            </Page>
        </div>
    );
}

export default App;
