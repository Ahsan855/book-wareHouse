import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const userLogOut = () => {
    signOut(auth);
  };
  return (
    //   This is navbar section
    <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-white">
      <Container>
        <Navbar.Brand as={Link} to="/">
        Book-WareHouse
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="text-xl text-black" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-xl text-black" as={Link} to="about">
              About
            </Nav.Link>
            <Nav.Link className="text-xl text-black" as={Link} to="blog">
              Blogs
            </Nav.Link>
            <Nav.Link className="text-xl text-black" as={Link} to="contact">
              Contact
            </Nav.Link>
            {user ? (
              <>
               <Nav.Link className="text-xl text-black">Manage-Items</Nav.Link>
               <Nav.Link className="text-xl text-black">Add-Item</Nav.Link>
               <Nav.Link className="text-xl text-black">My-Item</Nav.Link>
                <Nav.Link className="text-xl text-black" onClick={userLogOut}>
                  LogOut
                </Nav.Link>
              </>
            ) : (
              <Nav.Link className="text-xl text-black" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
