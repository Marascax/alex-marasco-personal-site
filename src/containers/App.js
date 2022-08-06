import { AppContextWrapper } from '../lib/appContext';
import Page from './page';

import './App.scss';

function App() {

    return (
        <AppContextWrapper>
            <div className="App">
                <Page id='page1'/>
                <Page id='page2'/>
                <Page id='page3'/>
            </div>
        </AppContextWrapper>
    );
}

export default App;
