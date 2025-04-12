import {useEffect, useLayoutEffect, useState} from "react";
import Button from "../components/Button.jsx";

const BlinkyRender = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setTimeout(() => setValue(10 + Math.random() * 200), 300);
    }
  }, [value]);

  return <Button onClick={() => setValue(0)}>useEffect: {value}</Button>
}

const NotBlinkyRender = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setTimeout(() => setValue(10 + Math.random() * 200), 300);
    }
  }, [value]);

  return <Button onClick={() => setValue(0)}>useLayoutEffect: {value}</Button>
}

export default function LayoutEffect() {
  return (
      <div className='flex flex-col justify-center-safe items-center flex-1 p-1'>
        <h1 className='text-3xl'>UseLayoutEffect</h1>
        <BlinkyRender/>
        <NotBlinkyRender/>
      </div>
  )
}