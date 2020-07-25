import React from 'react';
import { NavbarList, List } from './styled/Navbar.styled.js';

const Navbar = () => {
    return(
        <nav>
            <NavbarList>               
                <List>Clube do Livro</List>
                <List>Home</List>
                <List>Sobre</List>
                <List>Contato</List>
                <List><i className="fas fa-user"/></List>                
            </NavbarList>
        </nav>
    );
}

export default Navbar;