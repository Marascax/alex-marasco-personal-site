import DownArrow from "../../../components/downArrow";
import { useAppContext } from "../../../lib/appContext";

import './education.scss';

const Education = props => {

    const context = useAppContext();

    return (
        <div className='Education'>
            <div className='Header'>
                <h1>Education</h1>
            </div>

            <div className='DownArrow' onClick={() => context.scrollDown()}>
                <DownArrow width="100"/>
            </div>
        </div>
    );
}

export default Education;