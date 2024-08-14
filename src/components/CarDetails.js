import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CarDetails = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <Modal show={!!car} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{car.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={car.image} alt={car.name} style={{ width: '100%' }} />
        <p>{car.details}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CarDetails;
