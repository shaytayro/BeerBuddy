
import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class ModalDial extends Component {
  /**The state consists of the current beer properties*/
  state = { show: false, name: "", first_brewed: "", desc: "", food: "" }

  /** The function changes the modal properties according to the user's choice*/
  componentDidUpdate(_prop, _state) {
    if (this.props.show2 !== _prop.show2 && this.props.show2 === true) {
      this.setState({ show: true, name: this.props.name2, first_brewed: this.props.first_brewed2, desc: this.props.desc2, food: this.props.food2 })
    }
  }
  /**The function close the modal dialog */
  handleClose = () => {
    this.props.close2();
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>First brewed : {this.state.first_brewed} </Modal.Body>
          <Modal.Body>Description : {this.state.desc} </Modal.Body>
          <Modal.Body>Food Pairing : {this.state.food} </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
      </Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

}

export default ModalDial;




