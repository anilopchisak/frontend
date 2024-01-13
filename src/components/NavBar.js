// import React, {useContext} from 'react';
// import {observer} from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MENU_ROUTE} from "../utils/consts";
import {NavLink} from "react-bootstrap";

const NavBar = () => {
    return(
        <>
          <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav.Link style={{color:'black', fontWeight:'bold'}} href="..">Zoo Cafe</Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link href="..">Menu</Nav.Link>
                    <Nav.Link href="/order_archive" className="ml-2">Order Archive</Nav.Link>
                </Nav>
            </Container>
          </Navbar>
        </>
    );
};

export default NavBar;