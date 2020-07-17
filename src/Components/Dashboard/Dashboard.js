import React, { Fragment, useState } from 'react';
import BookList from '../BookList/BookList';
import Button from '../Button/Button';
//import BookForm from '../BookForm/BookForm';

const Dashboard = ({books, addBook, deleteBook}) => {
    
    const [showAddModal, setShowAddModal] = useState(false);

    return(
        <Fragment>
            <BookList books={books} deleteBook={deleteBook}/>
            <Button 
                variant='solid' 
                color='#FF9626' 
                onClick={addBook}
            >
            Add <i className="fas fa-plus-circle"/>
            </Button>
            {/*<BookForm addBook={addBook}/>*/}
        </Fragment>
    );
}

export default Dashboard;