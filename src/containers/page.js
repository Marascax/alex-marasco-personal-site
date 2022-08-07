import { useEffect, useRef } from 'react';

import { useAppContext } from '../lib/appContext';
import useIsVisible from '../lib/hooks/useIsVisible';

import './page.scss';

const Page = props => {
    const context = useAppContext();

    const elementRef = useRef(null);
    const isVisible = useIsVisible(elementRef, props.id);

    const pageId = props.id;

    console.log(`Page ${pageId}: ${isVisible ? 'visible' : 'not visible'}`);

    return (
        <div ref={elementRef} className='Page' id={pageId}>
            {isVisible && props.children ? props.children : pageId}
        </div>
    )
}

export default Page;