
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
}

const useIntersectionObserver = <T extends Element,>(
    options: IntersectionObserverOptions
): [RefObject<T>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            options
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef, options.threshold, options.root, options.rootMargin]);

    return [elementRef, isVisible];
};

export default useIntersectionObserver;
