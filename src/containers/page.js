import { useEffect, useRef } from 'react';

import { useAppContext } from '../lib/appContext';
import useIsVisible from '../lib/hooks/useIsVisible';

import './page.scss';

const Page = props => {
    const context = useAppContext();

    const elementRef = useRef(null);
    const isVisible = useIsVisible(elementRef, props.pageId);

    const pageId = props.pageId;

    useEffect(() => {
        if (isVisible) {
            context.scroll(`#${pageId}`)
        }
    }, [isVisible])

    console.log(`Page ${props.pageId}: ${isVisible ? 'visible' : 'not visible'}`);

    return (
        <div ref={elementRef} className='Page' id={pageId}>
            {isVisible && pageId ? pageId : ""}
        </div>
    )
}

export default Page;