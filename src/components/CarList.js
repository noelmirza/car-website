import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './CarList.css';


const cars = [
  { id: 1, name: 'Tesla Model S', image: '/images/tesla.jpg', details: 'Electric car with advanced features.' },
  { id: 2, name: 'BMW 3 Series', image: '/images/bmw.jpg', details: 'Luxurious and sporty sedan.' },
  { id: 3, name: 'Audi A5', image: '/images/audi.jpg', details: 'Compact executive car with a premium feel.' },
  { id: 4, name: 'Range Rover Sport', image: '/images/range.jpg', details: 'Compact executive car with a premium feel.' },
  { id: 5, name: 'Toyta Yaris', image: '/images/toyota.jpg', details: 'very compact and reliable car.' },
  { id: 6, name: 'Tesla Model 3', image: '/images/tesla3.jpg', details: 'Compact smart car, very easy to drive.' },
  { id: 7, name: 'Audi Etron', image: '/images/etron.jpg', details: 'Electric SUV with a premium feel.' },
  { id: 8, name: 'Mercedes C-Class', image: '/images/mercedes.jpg', details: 'Premium car with sporty desgin' },
  { id: 9, name: 'Golf R', image: '/images/golf.jpg', details: 'A small but powerfull car.' }
  

];
const CarList = ({ onSelectCar }) => {


  return (
    <Container id="cars">
      <h2 className="text-center my-4">The Cars !</h2>
      <Row>
    {cars.map((car) => (
              <Col key={car.id} md={4}>
            <Card className="mb-4 car-card">
              <Card.Img variant="top" src={car.image} className="car-image" />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Button variant="primary" onClick={() => onSelectCar(car)}>View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CarList;
