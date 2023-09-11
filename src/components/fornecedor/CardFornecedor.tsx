import Card from 'react-bootstrap/Card';
import ModalFornecedor from './ModalFornecedor';


function CardFornecedor() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Licitação</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Títutlo da Licitação</Card.Subtitle>
      <Card.Text>
        Objeto da Licitação: Conteudo cadastrado
      </Card.Text>
    </Card.Body>
    <ModalFornecedor/>
  </Card>
  

  );
}

export default CardFornecedor;