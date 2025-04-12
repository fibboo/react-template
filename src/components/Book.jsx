import {useContext} from "react";
import CustomContext from "../contexts/CustomContext.js";

export function Book(props) {
  const {removeBook} = useContext(CustomContext)
  const {id, title} = props

  return (
      <div>
        <h1>#{id} {title} </h1>
        <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => removeBook(id)}>Remove
        </button>
      </div>
  );
}
