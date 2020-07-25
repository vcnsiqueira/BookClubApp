import React, { Fragment, useState } from 'react';
import uniqid from 'uniqid';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';


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
      <Fragment>
        <Navbar />
        <Dashboard books={books} addBook={addBook} deleteBook={deleteBook}/>
      </Fragment>
  );
}

export default App;
