import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalFornecedor() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Encaminhar Proposta
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Proposta do Fornecedor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome do Fornecedor</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Valor da Proposta (R$)</Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="informacoesDaProposta">
                            <Form.Label>Informações da Proposta</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Digite as informações da proposta" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Enviar Proposta
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalFornecedor;