import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import Form from '../cadastroImovel-component/formCadastro'


class ModalImovel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      console.log(this.handleSubmit)
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

  handleChange = e=>{
      this.setState({[e.target.name]: e.target.value});
  };
  
    
    render() {
      return (
        <>
          <Button variant="outline-dark" size="lg" onClick={this.handleShow}>
            Imovel
          </Button>
          <Modal size="xl" show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cadastro Imovel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger"  size="lg" onClick={this.handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
export default ModalImovel;
