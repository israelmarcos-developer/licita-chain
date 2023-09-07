import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
const MenuNavigation = () => {
    return (
    <div className='box-shadow-custon'>   
      <Navbar bg="light" data-bs-theme="light">
        <div className='container'>
            <Navbar.Brand>
                <Image src="https://sso.acesso.gov.br/assets/govbr/img/govbr.png" width="135" height="50" alt="Logo" />
            </Navbar.Brand>
        </div>
        <Container>
        {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>*/}
        </Container>
      </Navbar>
      </div>
    );
  };
  
export default MenuNavigation;
