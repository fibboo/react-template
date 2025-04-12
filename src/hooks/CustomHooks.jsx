import {useEffect, useRef, useState} from "react";

function useLocalStorage(initialValue, key) {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    return storage ? +storage : initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

function usePrevious(value) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

export function ShowPrevious() {
  const [count, setCount] = useLocalStorage(0, 'count');

  useEffect(() => {
    const interval = setInterval(() => setCount(count => count + 1), 1000);

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
      <div className='flex flex-col justify-center-safe items-center flex-1 p-1'>
        <p className='text-3xl'>Current: {count}</p>
        <p className='text-3xl'>Previous: {usePrevious(count)}</p>
      </div>
  )
}
