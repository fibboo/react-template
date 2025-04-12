import {useState} from "react";
import CustomContext from "../contexts/CustomContext.js";

const Context = (props) => {
  const [books, setBooks] = useState([
    {id: 1, title: "Book 1"},
    {id: 2, title: "Book 2"},
    {id: 3, title: "Book 3"},
  ]);

  const addBook = (book) => setBooks([book, ...books]);

  const removeBook = (id) => setBooks(books.filter(book => book.id !== id));

  const value = {books, addBook, removeBook};

  return (
      <CustomContext.Provider value={value}>
        {props.children}
      </CustomContext.Provider>
  )
}

export default Context;
