import { useState, useEffect, useRef } from 'react';

const useDelayedState = <T>(initialState?: T) => {
  const [state, setState] = useState<T | undefined>(initialState);
  const timeoutIdRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const setDelayedState = (newState: T, delay?: number) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    if (delay) {
      const id = setTimeout(() => {
        setState(newState);
      }, delay);

      timeoutIdRef.current = id;
    } else {
      setState(newState);
    }
  };

  return { state, setDelayedState };
};

export default useDelayedState;
