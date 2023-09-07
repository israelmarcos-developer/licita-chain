import WalletButton from '../components/WalletButton'
import MenuNavigation from '../components/MenuNavigation'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
export default function Home() {

  return (
    <main>
      <MenuNavigation />

      <div className='container-login-custon'>
        <Row>
          <Col>
            <Image src="https://sso.acesso.gov.br/assets/govbr/img/conta_govbr_v2.jpg" alt='img' fluid />
          </Col>
          <Col>
          <WalletButton />
          </Col>
        </Row>
      </div>

      {/**/}
    </main>
  )
}
