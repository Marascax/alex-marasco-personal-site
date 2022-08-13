import { useAppContext } from '../../../lib/appContext';

import './aboutMe.scss';

const AboutMe = props => {

    const context = useAppContext();

    return (
        <div className='AboutMe'>
            <div className='Header'>
                <h1>About Me</h1>
            </div>

            <div className='MainContent'>

            </div>
        </div>
    );
}

export default AboutMe;