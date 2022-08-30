
import { useAppContext } from '../../../lib/appContext';

import './workHistory.scss'

const WorkHistory = props => {

    const context = useAppContext();

    return (
        <div className='WorkHistory'>

            <div className='Header'>
                <h1>Work History</h1>
            </div>

            <div className='WorkHistoryContent'>
                
            </div>

        </div>
    );
}

export default WorkHistory;