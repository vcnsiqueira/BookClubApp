import React, { useState } from 'react';
import uniqid from 'uniqid';

//import BookContextProvider from './Contexts/BookContext';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css';


const App = () => {

  const [books, setBooks] = useState([
    {
        id: 1,
        title: 'Game of Thrones',
        author: 'George R. R. Martin',
    },
    {
        id: 2,
        title: 'Don Quijote de la Mancha',
        author: 'Miguel de Cervantes',
    },
  ]);

  const addBook = book => {
      setBooks([{ ...book, id: uniqid() }, ...books]);
  };

  const deleteBook = id => {
      setBooks(books.filter(book => book.id !== id));
  };

  return (
      <Dashboard books={books} addBook={addBook} deleteBook={deleteBook}/>
  );
}

export default App;
