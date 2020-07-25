import styled from 'styled-components';

const color = '#3F51B5';

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    display: ${(props) => props.display === 'display-block' ? 'block' : 'none'};

    .display-block {
        display: block;
    }
    
    .display-none {
        display: none;
    }
`;

export const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    height: auto;
    background: #FFFFFF;
    /*border: 1px solid ${color};*/
    border-radius: 5px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2), 0 7px 20px 0 rgba(0,0,0,0.17);
    margin: auto;
    transition: all .8s;
    width: 40%;
    transform: translate(-50%, -50%);
`;

export const ModalHeader = styled.div`
    background: ${color};
    height: 40px;
    line-height: 40px;
    padding: 5px 20px;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    h3 {
        color: #FFF;
        float: center;
        margin: 0;
        padding: 0;
    }
`;

export const ModalBody = styled.div`
    padding: 10px 15px;
    text-align: center;
`;

export const ModalFooter = styled.div`
    height: 35px;
    padding: 15px;
    text-align: center;
`;