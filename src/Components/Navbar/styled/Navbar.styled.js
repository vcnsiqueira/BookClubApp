import styled from 'styled-components';

const color = '#3F51B5';

export const NavbarList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${color};
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    font-size: 1rem;
`;

export const List = styled.li`
    float: right;
    color: white;
    padding: 15px;
    text-decoration: none;
    &:first-child {
        flex: 1;
        font-size: 1.5rem;
        font-weight: bold;
    }
`;