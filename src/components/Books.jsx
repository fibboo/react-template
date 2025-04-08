import {useContext, useState} from "react";
import {CustomContext} from "../hooks/Context.jsx";
import {Book} from "./Book.jsx";

export function Books() {
  const [book, setBook] = useState({})
  const {books = [], addBook} = useContext(CustomContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(book)
  }

  return (
      <div>
        {books.map(book => <Book key={book.id} {...book}/>)}
        <input
            className="border border-gray-400 p-2 w-full"
            type="text" placeholder="id"
            onChange={(e) => setBook({...book, id: e.target.value})}
        />
        <input
            className="border border-gray-400 p-2 w-full"
            type="text" placeholder="title"
            onChange={(e) => setBook({...book, title: e.target.value})}
        />
        <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
        >Add
        </button>
      </div>
  );
}