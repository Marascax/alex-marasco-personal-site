import { useAppContext } from '../../../lib/appContext';

import './workHistory.scss'

const WorkHistory = props => {

    const context = useAppContext();

    return (
        <div className='work-history'>

            <div className='Header'>
                <h1>Work History</h1>
            </div>

            <div className='work-history-content'>
                <div className='work-history-selection'>

                </div>

                <div className='timeline'>

                    <div className='timeline-item'>

                        <div className='item-container'>
                            <div className='item-title'>General Dynamics Information Technology</div>
                            <div className='item-subtitle'>Technical Intern</div>
                            <div className='item-date'>Jun 2020 - May 2021</div>
                        </div>
                        
                    </div>

                    <div className='timeline-item'>

                        <div className='item-container'>
                            <div className='item-title'>CGI</div>
                            <div className='item-subtitle'>Software Developer</div>
                            <div className='item-date'>Jun 2021 - Apr 2022</div>
                        </div>
                        
                    </div>

                    <div className='timeline-item'>

                        <div className='item-container'>
                            <div className='item-title'>Title3</div>
                            <div className='item-subtitle'>Subtitle3</div>
                            <div className='item-date'>Date3</div>
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>
    );
}

export default WorkHistory;