import { useState } from 'react';

import Loading from '../../../components/loading';
import { useAppContext } from '../../../lib/appContext';

import './aboutMe.scss';

const AboutMe = props => {

    const context = useAppContext();
    const [pageText, setPageText] = useState(null);

    let content = !pageText ? <Loading/> : <p>{pageText}</p>;

    if (!pageText) { // if page text hasn't been loaded
        // fetch the doc with the text
        fetch('./data/AboutMe.txt')
            .then(response => response.text())
            .then(text => {
                setPageText(text);
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