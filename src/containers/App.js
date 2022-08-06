import { AppContextWrapper } from '../lib/appContext';
import Page from './page';

import './App.scss';

function App() {

    const scroll = (selector) => {
        const section = document.querySelector(selector);
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    return (
        <AppContextWrapper>
            <div className="App">
                <Page pageId='page1'/>
                <Page pageId='page2'/>
                <Page pageId='page3'/>
            </div>
        </AppContextWrapper>
    );
}

export default App;
