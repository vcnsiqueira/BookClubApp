import React from 'react';
import { NavbarList, List } from './styled/Navbar.styled.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <NavbarList>               
                <List>Clube do Livro</List>
                <List>
                    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>Home</Link>
                </List>
                <List>
                    <Link to='/about' style={{textDecoration: 'none', color: 'white'}}>Sobre</Link>
                </List>
                <List>
                    <Link to='/contact' style={{textDecoration: 'none', color: 'white'}}>Contato</Link>
                </List>
                <List><i className="fas fa-user"/></List>                
            </NavbarList>
        </nav>
    );
}

export default Navbar;