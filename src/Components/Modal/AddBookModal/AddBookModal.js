import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Label from '../../Label/Label';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFooter } from '../styled/Modal.styled';

const AddBookModal = ({ show, addBook, handleClose, children }) => {
    
    const [book, setBook] = useState({
        title: '',
        author: '',
    });
    
    const showHideClassName = show ? "display-block" : "display-none";

    const handleInput = event => {
        let { name, value } = event.target;
        setBook({ ...book, [name]: value });
    };

    const cancelButton = event => {
        event.preventDefault();
        setBook({ 
            title: '',
            author: '',
         });
         handleClose();
    }

    const submitForm = event => {
        event.preventDefault();
        const newBook = book;
        addBook(newBook);
        setBook({
            title: '',
            author:'',
        });
        handleClose();
    };

    const handleBackground = event => {
        if(!event.target.closest('.modal-wrapper')){
            setBook({
                title: '',
                author:'',
            });
            handleClose();
        }
    }

    return(
        <Modal display={showHideClassName} onClick={handleBackground}>
            <ModalWrapper className="modal-wrapper">
                <ModalHeader>
                    <h3>{children}</h3>
                </ModalHeader>
                <form onSubmit={submitForm}>
                    <ModalBody>
                        <div>
                            <Label>Título:</Label>
                            <Input type="text" name="title" value={book.title} onChange={handleInput} placeholder="Nome do título do livro" required/>
                        </div>
                        <div>
                            <Label>Autor:</Label>
                            <Input type="text" name="author" value={book.author} onChange={handleInput} placeholder="Nome do autor do livro" required/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="outlined" type="button" onClick={cancelButton}>Cancelar</Button>
                        <Button variant="solid" type="submit">Cadastrar</Button>
                    </ModalFooter>
                </form>
            </ModalWrapper>
        </Modal>
    )
}

AddBookModal.propTypes = {
    show: PropTypes.bool,
    addBook: PropTypes.func,
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default AddBookModal;