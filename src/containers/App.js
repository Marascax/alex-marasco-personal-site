import { AppContextWrapper } from '../lib/appContext';
import Page from './page';

import './App.scss';

function App() {

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
