import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'

function Header() {
  return (
    <Navbar expand="lg" bg="primary" className="text-white">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" className='text-white' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>About</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Services</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Purpose</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Contact</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='text-white'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// Default export
// export default Header;
export { Header };