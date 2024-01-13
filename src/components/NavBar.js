// import React, {useContext} from 'react';
// import {observer} from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MENU_ROUTE} from "../utils/consts";
// import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import {publicRoutes} from "../routes";

const NavLink = ({ children, to, isLogo}) => {
    return (
        <Nav.Link className="ml-2">
            <Link to={to}>
                <span style={{color: isLogo ? 'black' : 'grey', fontWeight: isLogo ? 'bold' : 'light'}}>
                    {children}
                </span>
            </Link>
        </Nav.Link>
    )
}

const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <NavLink to='/' isLogo>
                    Zoo Cafe
                </NavLink>
                <Nav className="me-auto">
                    {
                        publicRoutes.map(route => (
                            route.title &&
                            <NavLink to={route.path} key={route.title}>
                                {route.title}
                            </NavLink>
                        ))
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;