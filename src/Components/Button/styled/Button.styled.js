import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${(props) => props.variant !== 'outlined'  ? props.color : '#FFFFFF'};
    border: 1px solid ${(props) => props.color};
    color: ${(props) => props.variant !== 'outlined' ? '#FFFFFF' : props.color};
    border-radius: 3px;
    padding: 0.5rem;
    font-weight: bold;     
`