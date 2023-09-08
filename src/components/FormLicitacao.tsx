import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormLicitacao() {
  return (
    <Form>
      <Row className="mb-3">

        <Form>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Objeto da Licitação</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>

      </Row>

      <Row className="mb-3 w-50">

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Valor Planejado (R$)</Form.Label>
          <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Registrar Licitação
      </Button>
    </Form>
  );
}

export default FormLicitacao;