import { useRef } from 'react';

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
    );

    // decide what content to show
    let content = loadingElem;
    // only show stuff if visible in the first place
    if (isVisible && !!props.children)
        // if there are children show them, if not show loading placeholder
        content = props.children;

    return (
        <div ref={elementRef} className='Page' id={pageId}>

            { content }
    
        </div>
    )
}

export default Page;