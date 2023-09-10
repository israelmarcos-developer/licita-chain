import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormLicitacao from '../components/FormLicitacao';


function NavTabs() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Licitação">
        <FormLicitacao />
      </Tab>
      <Tab eventKey="profile" title="Fornecedor">
      Tab content for Contact
      </Tab>
      <Tab eventKey="contact" title="Propostas / Pagamento" >
        Tab content
      </Tab>
      <Tab eventKey="history" title="Histórico" >
        Tab content2
      </Tab>
    </Tabs>
  );
}

export default NavTabs;