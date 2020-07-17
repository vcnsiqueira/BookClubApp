import React from 'react';
import PropTypes from 'prop-types';
import { BookSection, SectionTitle, List, BookItem, GridBook, BookCardRow, BookCardColumn, BookImage, BookDetails, BookTitle, BookAuthor, BookOptions } from './styled/BookList.styled';

const BookList = ({ books, deleteBook }) => {
    
    return(
        <BookSection>
            <SectionTitle>Books</SectionTitle>
            <List>
                {books.map(book => (
                    <BookItem key={book.id}>
                        <GridBook>
                            <BookCardRow>
                                <BookCardColumn size={1}>
                                    <BookImage>
                                        <i className="fas fa-book"/>
                                    </BookImage>
                                </BookCardColumn>
                                <BookCardColumn size={12}>
                                    <BookDetails>
                                        <BookTitle>{book.title}</BookTitle>
                                        <BookAuthor>{book.author}</BookAuthor>
                                    </BookDetails>
                                </BookCardColumn>
                                <BookCardColumn size={1}>
                                    <BookOptions
                                        onClick={() => deleteBook(book.id)}
                                    >
                                        <i className="fas fa-trash-alt"/>
                                    </BookOptions>
                                </BookCardColumn>
                            </BookCardRow>
                        </GridBook>
                    </BookItem>
                ))}
            </List>
        </BookSection>
    );
};

BookList.propTypes = {
    books: PropTypes.object,
    deleteBook: PropTypes.func,
};

export default BookList;