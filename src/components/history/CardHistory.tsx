import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {biddingDetails} from '../../pages/api/services'

function CardHistory() {

  const [dados, setDados] = useState<biddingDetails[] | null>(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await axios.get('/api/services');
        setDados(resposta.data);
      } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
      }
    };

    buscarDados();
  }, []);
  console.log(dados)


  return (
    <Row>
      {dados ? (
        dados.map((item) => (
          <Col xs={12} md={6} lg={3} key={''}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{''}</Card.Subtitle>
                <Card.Text>
                  Objeto da Licitação: {item.proposal}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p>Carregando...</p>
      )}
    </Row>
  );
}

export default CardHistory;