import { useCallback, useEffect, useRef } from 'react';

type TDidUnmount = () => boolean;

const useDidUnmount = (): TDidUnmount => {
    const refDidUnmount = useRef(false);

    const didUnmount: TDidUnmount = useCallback(() => {
        return refDidUnmount.current;
    }, []);

    useEffect(() => {
        return () => {
            refDidUnmount.current = true;
        };
    }, []);

    return didUnmount;
};

export default useDidUnmount;
