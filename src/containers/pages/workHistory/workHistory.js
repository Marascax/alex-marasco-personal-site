import { useState } from 'react';

import Loading from '../../../components/loading';
import Timeline from '../../timeline';
import { useAppContext } from '../../../lib/appContext';

import './workHistory.scss'

const WorkHistory = props => {

    const context = useAppContext();

    const [pageJson, setPageJson] = useState(null);
    const [currSelect, setCurrSelection] = useState(null);

    let timelineContent;
    if (!pageJson) timelineContent = <Loading/>;
    else {
        const pageJobs = pageJson.jobs;
        // create timeline for jobs
        timelineContent = <Timeline data={pageJobs} selectFunction={setCurrSelection}/>
    }

    if (!pageJson) { // if page json hasn't been loaded
        // fetch the doc
        fetch('./data/WorkHistory.json')
            .then(response => response.json())
            .then(json => {
                setPageJson(json);
            });
    }

    return (
        <div className='work-history'>

            <div className='Header'>
                <h1>Work History</h1>
            </div>

            <div className='work-history-content'>
                <div className='work-history-selection' style={{ display: !pageJson ? 'none' : 'block' }}>

                </div>

                {timelineContent}
            </div>

        </div>
    );
}

export default WorkHistory;