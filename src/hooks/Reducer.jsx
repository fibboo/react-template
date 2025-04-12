import Button from "../components/Button.jsx";
import {useReducer} from "react";

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 20;

const reducer = (state, {type, payload = step}) => {
  switch (type) {
    case "INCREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r + payload)
      };
    case "DECREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - payload)
      };
    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + payload)
      };
    case "DECREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - payload)
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + payload)
      };
    case "DECREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - payload)
      };
    default:
      return state;
  }
};

export function Reducer() {
  const [{r, g, b}, dispatch] = useReducer(reducer, {r: 127, g: 127, b: 127});

  return (
      <div className='flex flex-col justify-center-safe items-center flex-1 p-1'>
        <h1
            className='text-3xl'
            style={{color: `rgb(${r}, ${g}, ${b})`}}
        >
          Reducer with colors
        </h1>
        <div>
          <span>Red: </span>
          <Button onClick={() => dispatch({type: "INCREMENT_R"})}>+</Button>
          <Button onClick={() => dispatch({type: "DECREMENT_R"})}>-</Button>
        </div>
        <div>
          <span>Green: </span>
          <Button onClick={() => dispatch({type: "INCREMENT_G"})}>+</Button>
          <Button onClick={() => dispatch({type: "DECREMENT_G"})}>-</Button>
        </div>
        <div>
          <span>Blue: </span>
          <Button onClick={() => dispatch({type: "INCREMENT_B"})}>+</Button>
          <Button onClick={() => dispatch({type: "DECREMENT_B"})}>-</Button>
        </div>
      </div>
  )
}
