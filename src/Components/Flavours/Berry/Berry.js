import React from 'react'
import './Berry.scss'
import {Row,Col,Container,Card,Button} from 'react-bootstrap'
import blueberry from '../../../Images/blueberry.jpeg'
import strawberry from '../../../Images/strawberry.jpg'
import raspberry from '../../../Images/raspberry.jpg'
import Footer from '../../../Layout/Footer'


export default function Berry() {
  return (
    <>
    <h1 className='heading2'>Fresh Baked Berry Cakes Online </h1>
    <div className='berry-col'>
    <Container>
  
    <Row>
      <Col><Card style={{ width: '14rem' }}>
      <img className='Img5' src={blueberry}/>
      <Card.Body>
        <Card.Title className='text5'>Blueberrycake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹500
        </Card.Text>
        <Button className='choco-btn' >Order Now</Button>
      </Card.Body>
    </Card></Col>

      <Col><Card style={{ width: '14rem' }}>
      <img className='Img5' src={strawberry}/>
      <Card.Body>
        <Card.Title className='text5'>Strawberry Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹670
        </Card.Text>
        <Button className='choco-btn' >Order Now</Button>
      </Card.Body>
    </Card></Col>

    <Col><Card style={{ width: '14rem' }}>
      <img className='Img5' src={raspberry}/>
      <Card.Body>
        <Card.Title className='text5'>Raspberry Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹670
        </Card.Text>
        <Button className='choco-btn' >Order Now</Button>
      </Card.Body>
    </Card></Col>

     
    </Row>
  </Container>
    </div>
    <div>
    <Footer/>
    </div>
    </>
  )
}
