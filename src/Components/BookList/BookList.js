import React from 'react';
//import { BookContext } from '../../Contexts/BookContext';
//import bookThumb from '../book.png';

const BookList = props => {
    
    const { books, deleteBook } = props;

    return(
        <div className="section section-books">
            <div className="container">
                <h6>Books</h6>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>
                            <div className="card book">
                                <div className="book image">
                                    <i className="fas fa-book"/>
                                </div>
                                <div className="book-details">
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-author">{book.author}</div>
                                </div>
                                <div
                                    onClick={() => deleteBook(book.id)}
                                    className="book-delete"
                                >
                                    <i clasName="fas fa-trash-alt"/>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookList;