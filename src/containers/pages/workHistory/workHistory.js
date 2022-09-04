import { useState } from 'react';

import Loading from '../../../components/loading';
import Timeline from '../../timeline';
import { useAppContext } from '../../../lib/appContext';

import './workHistory.scss'

const WorkHistory = props => {

    const context = useAppContext();

    const [pageJson, setPageJson] = useState(null);
    const [currSelection, setCurrSelection] = useState(null);

    let timelineContent = null;
    let jobData = {};
    if (!pageJson) timelineContent = <Loading/>;
    else {
        const pageJobs = pageJson.jobs;

        // create timeline for jobs
        timelineContent = <Timeline data={pageJobs} selectFunction={setCurrSelection}/>;

        // load in the details of each job
        pageJobs.forEach(job => jobData[job.id] = { ...job, details: [ ...job.details ] });
    }


    let selectionContent;
    // if there is data and a selection is made, get the selection's data
    if (!!pageJson && !!currSelection) {
        let jobSelection = jobData[currSelection];

        selectionContent = (
            <div className='work-history-selection'>

                {/* have key change on each selection to run css animation again */}
                <div className='job-image' key={jobSelection.image}>
                    <img src={jobSelection.image} alt='Company Image'/>
                </div>

                <div className='job-details'>
                    <ul className='job-details-list' key={jobSelection.image}>
                        { 
                            jobSelection.details.map((detail, index) => (
                                <li className='job-details-list-item' key={index}>
                                    {detail}
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        );
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
                <div className='timeline-hint'>
                    (Select Any Item Below for More Detail)
                </div>

                <div className='slideshow-history'>
                    (Coming Soon)
                </div>
                
                {timelineContent}

                {selectionContent}

            </div>

        </div>
    );
}

export default WorkHistory;