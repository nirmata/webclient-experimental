import { useCallback, useEffect, useRef } from 'react';

type TDidMount = () => boolean;

const useDidMount = (): TDidMount => {
    const refDidMount = useRef(false);

    const didMount: TDidMount = useCallback(() => {
        return refDidMount.current;
    }, []);

    useEffect(() => {
        refDidMount.current = true;
    }, []);

    return didMount;
};

export default useDidMount;
