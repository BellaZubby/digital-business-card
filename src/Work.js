import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Card, Button} from 'react-bootstrap';
import logo2 from './images/logo2.jpeg'
import './Work.css';
import {BsTwitter,BsFacebook,BsLinkedin,BsTelephoneFill,BsEnvelopeFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';


    
function Work() {
    return (
      <div>
        <Container className ="text-primary">
          <Row>
          <Card>
          <Card.Img variant='top ' src={logo2} className=" logo" />
          <Card.Body className="bg-primary text-black">
            <Card.Title className="text-center title typewriter" >"We make your dream structures a reality"</Card.Title>
            <Card.Title className='service'> OUR SERVICES</Card.Title>
            <Card.Text>
              <ul>
                <li className='fs-4'>Construction services.</li>
                <li className='fs-4'>Structural designing.</li>
                <li className='fs-4'>Consultancy.</li>
                <li className='fs-4'>Building services.</li>
                <li className='fs-4'>Internship.</li>
              </ul>
              <p className='fs-5'>Click <Link to ='/project'className='text-danger'>here</Link> to access some of our projects.</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer className='footer text-center bg-dark'>
            <h1  className='fs-5'>CONTACT US</h1>
            <a href='#'><BsTwitter/></a>
            <a href='#'><BsFacebook/></a>
            <a href='#'><BsLinkedin/></a>
            <a href='#'><BsEnvelopeFill/></a>
            <a href="#"><BsTelephoneFill/></a>
          </Card.Footer>
        </Card>
          </Row>
      </Container>
    </div>
      );
    }
    
    export default Work;