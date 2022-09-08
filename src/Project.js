import React from 'react';
import './Project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Card,} from 'react-bootstrap';



function Project(props) {
  return (
    <div>
      <Container>
        <Row>
        <Card className='cad'>
          <Card.Img variant="top" src= {props.img} />
          <Card.Body>
           <h3>{props.location}</h3>
           <h4> {props.description} </h4>
          
          </Card.Body>
        </Card>
      </Row>
       
    </Container>
    
    </div>
  )
}

export default Project