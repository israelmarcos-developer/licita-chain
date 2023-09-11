import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormLicitacao from '../../components/licitacao/FormLicitacao';
import CardFornecedor from '../../components/fornecedor/CardFornecedor';
import CardProposta from '../../components/proposta/CardProposta';


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
        <CardFornecedor />
      </Tab>
      <Tab eventKey="contact" title="Propostas / Pagamento" >
        <CardProposta />
      </Tab>
      <Tab eventKey="history" title="Histórico" >
      </Tab>
    </Tabs>
  );
}

export default NavTabs;