import Card from 'react-bootstrap/Card';
import ModalProposta from './ModalProposta';


function CardProposta() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Licitação</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Títutlo da Licitação</Card.Subtitle>
      <Card.Text>
        Objeto da Licitação: Conteudo cadastrado
      </Card.Text>
    </Card.Body>
    <ModalProposta/>

  </Card>
  

  );
}

export default CardProposta;