import { useEffect, useRef } from 'react';

import useIsVisible from '../lib/hooks/useIsVisible';
import Loading from '../components/loading';
import { useAppContext } from '../lib/appContext';

import './page.scss';

const Page = props => {
    const context = useAppContext();

    const elementRef = useRef(null);
    const isVisible = useIsVisible(elementRef, props.id);

    const pageId = props.id;

    console.log(`Page ${pageId}: ${isVisible ? 'visible' : 'not visible'}`);

    // element with loading screen
    let loadingElem = (
        <div className='Loader'>
            <Loading/>
        </div>
    )

    return (
        <div ref={elementRef} className='Page' id={pageId}>

            { 
                isVisible ? 
                    props.children ? 
                        props.children : loadingElem 
                    : null
            }
    
        </div>
    )
}

export default Page;