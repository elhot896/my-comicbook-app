import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      bg="white"
      sticky="top"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand href="/">Comics Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Grid</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
