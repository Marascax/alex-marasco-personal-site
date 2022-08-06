import { useState, useEffect } from "react";

const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  // 0 = execute whenever a targeted element becomes completely obscured or first starts to become unobscured
  // 0.25, 0.75 = passes through 25% or 75% visible in either direction
  threshold: [0.0, 0.25, 0.75],
};

// element reference, optional ID to use when logging
const useIsVisible = (elementRef, elementId = null) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        if (elementRef.current) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {

                    console.log(`[useIsVisible/useEffect] ${!!elementId ? `Element ${elementId} Intersect: ` : ''} ${entry.intersectionRatio}`);
                    
                    if (entry.isIntersecting) {
                        // only show set to visible if >25% visible
                        setIsVisible(entry.intersectionRatio >= 0.25);
                        //observer.unobserve(elementRef.current);
                    }
                });
            }, OPTIONS);
            observer.observe(elementRef.current);
        }
    }, [elementRef]);
  
    return isVisible;
  };
  
  export default useIsVisible;