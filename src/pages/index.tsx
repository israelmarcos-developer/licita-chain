import WalletButton from '../components/Wallet'
import MenuNavigation from '../components/MenuNavigation'
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Home() {

  return (
    <main>
      <MenuNavigation />
      <div className='container custon-home'>
        <Row>
          <Col>
            <Image src="https://sso.acesso.gov.br/assets/govbr/img/conta_govbr_v2.jpg" width="600" alt='img' fluid />
          </Col>
          <Col>
          <div className='container'>
            <WalletButton />
          </div>
          </Col>
        </Row>
      </div>

      {/**/}
    </main>
  )
}
