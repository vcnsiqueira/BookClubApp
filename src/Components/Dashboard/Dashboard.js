import React, { Fragment } from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';

const Dashboard = ({books, addBook, deleteBook}) => {
    return(
        <Fragment>
            <BookList books={books} deleteBook={deleteBook}/>
            <BookForm addBook={addBook}/>
        </Fragment>
    );
}

export default Dashboard;