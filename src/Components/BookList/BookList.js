import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BookSection, SectionTitle, List, BookItem, GridBook, BookCardRow, BookCardColumn, BookImage, BookDetails, BookTitle, BookAuthor, BookOptions, BookNullMessage } from './styled/BookList.styled';

import DeletionModal from '../Modal/DeletionModal/DeletionModal';

const BookList = ({ books, deleteBook }) => {

    const [showDeletionModal, setShowDeletionModal] = useState(null);

    const openDeletionModal = book => {
        setShowDeletionModal(book);
    };

    const closeDeletionModal = () => {
        setShowDeletionModal(null)
    };
    
    return(
        <BookSection>
            <SectionTitle>Books</SectionTitle>
            <List>
                {books.length === 0 ? 
                    <GridBook>
                        <BookCardRow>
                            <BookCardColumn size={14}>
                                <BookNullMessage>
                                    Você ainda não cadastrou nenhum livro. Clique em 'Novo Livro' para cadastrar um novo livro e iniciar!
                                </BookNullMessage>
                            </BookCardColumn>
                        </BookCardRow>
                    </GridBook> :
                    books.map(book => (
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
                                            onClick={() => openDeletionModal(book)}
                                        >
                                            <i className="fas fa-trash-alt"/>
                                        </BookOptions>
                                        <DeletionModal show={showDeletionModal === book} handleClose={closeDeletionModal} book={book} deleteBook={deleteBook}>Excluir livro</DeletionModal>
                                    </BookCardColumn>
                                </BookCardRow>
                            </GridBook>
                        </BookItem>
                    ))
                }
            </List>
        </BookSection>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    deleteBook: PropTypes.func,
};

export default BookList;