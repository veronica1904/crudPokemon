import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';



const NavBars = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/add">
                            Agregar
                        </Link></Nav.Link>

                        <Nav.Link><Link to="/list">
                            Listar
                        </Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBars;