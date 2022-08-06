import { useRef } from 'react';

import useIsVisible from '../lib/hooks/useIsVisible';

import './page.scss';

const Page = props => {

    const elementRef = useRef();
    const isVisible = useIsVisible(elementRef, props.pageId);

    console.log(`Page ${props.pageId}: ${isVisible ? 'visible' : 'not visible'}`);

    return (
        <div ref={elementRef} className='Page'>
            Page {isVisible && props.pageId ? props.pageId : ""}
        </div>
    )
}

export default Page;