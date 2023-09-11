import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
function ModalProposta() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Visualizar Propostas
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Proposta do Fornecedor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Nome do Fornecedor</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">R$ Valor da proposta</Card.Subtitle>
                            <Card.Text>
                                Conteúdo da proposta, Conteúdo da proposta,
                            </Card.Text>
                            <Button variant="warning">Aceitar Proposta</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalProposta;