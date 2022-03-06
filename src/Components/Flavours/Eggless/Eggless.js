import React from 'react'
import './Eggless.scss'
import {Row,Col,Container,Card,Button} from 'react-bootstrap'
import lichi from '../../../Images/lichi.jpg'
import rasmalai from '../../../Images/rasmalai.jpg'
import vanilla from '../../../Images/vanilla.jpg'
import Footer from '../../../Layout/Footer'


export default function Eggless() {
  return (
  <>
  <h1 className='heading2'>Fresh Baked Eggless Cakes Online </h1>
    <div className='eggless-col'>
    <Container>
  
    <Row>
      <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img7' src={lichi}/>
      <Card.Body>
        <Card.Title className='text5'>Lichi cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹599
        </Card.Text>
        <Button className='choco-btn' >Order Now</Button>
      </Card.Body>
    </Card></Col>

      <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img7' src={rasmalai}/>
      <Card.Body>
        <Card.Title className='text5'>Rasmalai Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹690
        </Card.Text>
        <Button className='choco-btn' >Order Now</Button>
      </Card.Body>
    </Card></Col>

      <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img7' src={vanilla}/>
      <Card.Body>
        <Card.Title className='text5'>Vanilla Cake</Card.Title>
        <Card.Subtitle  className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹600
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
