import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Midpopup.css';  // Import the custom CSS file

const Midpopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header className="custom-modal-header">
        <Modal.Title className="custom-modal-title">Know More</Modal.Title>
        <button type="button" className="btn-close-custom" aria-label="Close" onClick={handleClose}>
          ×
        </button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" className="form-control-custom" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" className="form-control-custom" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Are you a :</Form.Label>
            <div className="mt-3">
              <Form.Check inline type="radio" label="Provider" name="subscribe" id="subscribeYes" />
              <Form.Check inline type="radio" label="Patient" name="subscribe" id="subscribeNo" />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button variant="primary" onClick={handleClose} className="btn-custom">
          More Info
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Midpopup;
