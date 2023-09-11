import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {getValidBiddingContracts, myProvider} from '../../services/backend'


function FormLicitacao() {

  async function getLicitacoes() {
    console.log('inicio')
    try {
      // Substitua 'contractAddress' e 'provider' pelos valores reais
      const contractAddress = '0x371E7fc4E2F1E32309F054b4c4182256acf3aa68';
  
      const response = await getValidBiddingContracts(contractAddress, myProvider);
      
      console.log('response', response);
      // Aqui você pode manipular a resposta da função getValidBiddingContracts
    } catch (error) {
      console.error('erro', error);
      // Aqui você pode manipular os erros que podem ocorrer ao chamar a função getValidBiddingContracts
    }
    console.log('fim')
  }
  getLicitacoes()
  

  return (
    <Form className='form-licitacao mt-5'>
      <Row className="mb-3 w-50">

      <Form.Group as={Col} controlId="formLicitacao">
          <Form.Label ><h5>Titulo da Licitação</h5></Form.Label>
          <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3 mt-3" controlId="formValor">
          <Form.Label><h5>Valor Planejado (R$)</h5></Form.Label>
          <Form.Control type="number" placeholder="" />
      </Form.Group>

      <Form>
        <Form.Group className="mb-3 mt-3" controlId="formObjeto">
          <Form.Label><h5>Objeto da Licitação</h5></Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>

      <Button variant="success">
        Registrar Licitação
      </Button>
      </Row>
    </Form>
  );
}

export default FormLicitacao;