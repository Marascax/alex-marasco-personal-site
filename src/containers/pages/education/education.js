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

            <div className='EducationContent'>

                <div className='Degree'>

                    <ul className='DegreeSpecs'>
                        <li>
                            James Madison University (Class of '21)
                        </li>

                        <li>
                            Bachelor of Science (B.S.)
                        </li>

                        <li>
                            Computer Science Major
                        </li>

                        <li>
                            Mathematics Minor
                        </li>

                        <li>
                            3.699 GPA
                        </li>
                    </ul>

                </div>

                <div className='JmuImg'>

                </div>

            </div>

            <div className='DownArrow' onClick={() => context.scrollDown()}>
                <DownArrow width="100"/>
            </div>
        </div>
    );
}

export default Education;