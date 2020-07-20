import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFooter } from '../styled/Modal.styled';

const DeletionModal = ({ show, book, deleteBook, handleClose, children }) => {
    
    const showHideClassName = show ? "display-block" : "display-none";

    const cancelButton = event => {
        event.preventDefault();
         handleClose();
    }

    const handleBackground = event => {
        if(!event.target.closest('.modal-wrapper')){
            handleClose();
        }
    }

    return(
        <Modal display={showHideClassName} onClick={handleBackground}>
            <ModalWrapper className="modal-wrapper">
                <ModalHeader>
                    <h3>{children}</h3>
                </ModalHeader>
                <ModalBody>
                    <p>Tem certeza que deseja excluir esse livro da lista?</p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="outlined" type="button" onClick={cancelButton}>Cancelar</Button>
                    <Button variant="solid" type="button" onClick={() => deleteBook(book.id)}>Apagar</Button>
                </ModalFooter>
            </ModalWrapper>
        </Modal>
    )
}

DeletionModal.propTypes = {
    show: PropTypes.bool,
    book: PropTypes.object,
    deleteBook: PropTypes.func,
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default DeletionModal;