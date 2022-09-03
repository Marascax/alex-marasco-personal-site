import { useState } from 'react';

import Loading from '../../../components/loading';
import { useAppContext } from '../../../lib/appContext';

import './workHistory.scss'

const WorkHistory = props => {

    const context = useAppContext();

    const [pageJson, setPageJson] = useState(null);

    let content;
    if (!pageJson) content = <Loading/>;
    else {
        const pageJobs = pageJson.jobs;
        // create timeline item for each job
        content = pageJobs.map((job, index) => (
            <div className='timeline-item' key={index}>

                <div className='item-container'>
                    <div className='item-title'>{job.company}</div>
                    <div className='item-subtitle'>{job.title}</div>
                    <div className='item-date'>{job.startDate} - {job.endDate}</div>
                </div>
                
            </div>
        ));
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

                <div className='timeline' style={{ display: !pageJson ? 'none' : 'flex' }}>
                    {content}
                </div>
            </div>

        </div>
    );
}

export default WorkHistory;