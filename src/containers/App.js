
import Page from './page';

import './App.scss';
import { useEffect } from 'react';

function App() {

    const scroll = (selector) => {
        const section = document.querySelector(selector);
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    
    return (
        <div className="App">
            <Page pageId='page1'/>
            <Page pageId='page2'/>
            <Page pageId='page3'/>
        </div>
    );
}

export default App;
