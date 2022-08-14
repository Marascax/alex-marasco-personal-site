import { useState } from 'react';

import Loading from '../../../components/loading';
import AboutMeBody from '../../../components/aboutMeBody';
import { useAppContext } from '../../../lib/appContext';

import './aboutMe.scss';

const AboutMe = props => {

    const context = useAppContext();
    const [pageJson, setPageJson] = useState(null);

    let content = !pageJson ? <Loading/> : <AboutMeBody data={pageJson}/>;

    if (!pageJson) { // if page json hasn't been loaded
        // fetch the doc
        fetch('./data/AboutMe.json')
            .then(response => response.json())
            .then(json => {
                setPageJson(json);
            });
    }

    return (
        <div className='AboutMe'>
            <div className='Header'>
                <h1>About Me</h1>
            </div>

            <div className='MainContent'>
                {content}
            </div>
        </div>
    );
}

export default AboutMe;