import styled from 'styled-components';

const color = '#3F51B5';

export const StyledInput = styled.input`
    padding: 0.5em;
    margin: 10px;
    color: #495057;
    border: 1px solid ${color};
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 400;
    background-color: #FFF;
    width: 250px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #AAAAAA;
        opacity: 1; /* Firefox */
    }
`;