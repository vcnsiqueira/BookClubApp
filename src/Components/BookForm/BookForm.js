import React, { useState } from 'react';
//import { BookContext } from '../../Contexts/BookContext';

const BookForm = props => {
    
    const { addBook } = props;

    const [book, setBook] = useState({
        title: '',
        author: '',
    });

    const handleChange = event => {
        let { name, value } = event.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        addBook(book);
        setBook({
            title: '',
            author: '',
        });
    };

    return(
        <div className="section">
            <div className="container">
                <h6>New Book</h6>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={book.title}
                            onChange={handleChange}
                            placeholder="Insira o título do livro"
                            className="validate"
                            required
                        />
                        <label className="active" htmlFor="title">
                            Título
                        </label>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={book.author}
                            onChange={handleChange}
                            placeholder="Insira o nome do autor do livro"
                            className="validate"
                            required
                        />
                        <label className="active" htmlFor="author">
                            Autor
                        </label>
                    </div>
                    <div className="input-field center">
                        <button 
                            type="submit"
                            className="color"
                        >
                            <i className="fas fa-plus-circle"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookForm;