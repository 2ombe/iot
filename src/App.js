import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom"
import {LinkContainer} from "react-router-bootstrap"
import { FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import AppExplanation from './screen/AppDetails';
import Login from './screen/Login';
import ChatDisplay from './screen/ChatDisplay';
import AdminPanel from './screen/AdminPanel';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container active-cont">

      <Navbar style={{backgroundColor:"rgb(3, 49, 3)"}}   expand="lg">
        <Container>
          <LinkContainer to="/">

          <Navbar.Brand style={{color:"white"}} >Iot</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto w-100 justify-content-end">
              <Link className='nav-link' style={{color:"white"}} to="/">Home</Link>
              <Link className="nav-link" style={{color:"white"}} to="/chat">Charts</Link>
              <NavDropdown color='white' title="User" id="basic-nav-dropdown">
                <NavDropdown.Item href="/admin">
                  <FaUser style={{color:"white"}} className="mr-2" /> Admin Panel
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login">
                  <FaSignOutAlt style={{color:"white"}} className="mr-2" /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<AppExplanation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatDisplay />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
