import React, { Fragment, useState } from 'react';
import BookList from '../BookList/BookList';
import Button from '../Button/Button';
import AddBookModal from '../Modal/AddBookModal/AddBookModal';
//import BookForm from '../BookForm/BookForm';

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
                color='#FF9626' 
                onClick={toggleAddModal}
            >
            Add <i className="fas fa-plus-circle"/>
            </Button>
            <AddBookModal show={showAddModal} handleClose={toggleAddModal} addBook={addBook}>Adicionar Livro</AddBookModal>
            {/*<BookForm addBook={addBook}/>*/}
        </Fragment>
    );
}

export default Dashboard;