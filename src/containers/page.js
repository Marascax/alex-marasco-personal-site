import { useRef } from 'react';

import useIsVisible from '../lib/hooks/useIsVisible';
import Loading from '../components/loading';
import DownArrow from '../components/downArrow';
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

    // don't show arrow if page isn't visible or if page is last page
    let showArrow = {};

    if (!isVisible || context.onLastPage()) {
        showArrow = {
            display: 'none'
        }
    }

    return (
        <div ref={elementRef} className='Page' id={pageId}>

            { content }

            <div className='DownArrow' onClick={() => context.scrollDown()} style={showArrow}>
                <DownArrow width="100"/>
            </div>
    
        </div>
    )
}

export default Page;