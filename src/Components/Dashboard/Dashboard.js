import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import BookList from '../BookList/BookList';
import Button from '../Button/Button';
import AddBookModal from '../Modal/AddBookModal/AddBookModal';

const Dashboard = ({books, addBook, deleteBook}) => {
    
    const [showAddModal, setShowAddModal] = useState(false);

    const toggleAddModal = event => {
        setShowAddModal(!showAddModal);
    };

    return(
        <Fragment>
            <BookList books={books} deleteBook={deleteBook}/>
            <Button 
                variant='solid' 
                onClick={toggleAddModal}
            >
            Novo Livro <i className="fas fa-plus-circle"/>
            </Button>
            <AddBookModal show={showAddModal} handleClose={toggleAddModal} addBook={addBook}>Adicionar Livro</AddBookModal>
        </Fragment>
    );
}

Dashboard.propTypes = {
    books: PropTypes.array,
    addBook: PropTypes.func,
    deleteBook: PropTypes.func,
};

export default Dashboard;