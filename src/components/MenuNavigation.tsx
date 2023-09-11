import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from 'next/router';
import { logoffUser } from "../services/Web3Service"
import Button from 'react-bootstrap/Button';
import Image from "next/image";


const MenuNavigation = () => {
  const router = useRouter();

  function logoff() {
    logoffUser()
    router.push('/');
  }

  return (
    <div className='box-shadow-custon'>
      <Navbar bg="light" data-bs-theme="light">
        <div className='container'>
        <Navbar.Brand className='logo-custon'>
          <Image src="/logoBR.png" width="135" height="50" alt="Logo" /> 
        </Navbar.Brand>
        </div>
        <Container></Container>
        {router.pathname === '/dashboard' && (
          <div className='logoff-custon'>
            <Button onClick={logoff} as="input" type="reset" value="Sair" />
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default MenuNavigation;
