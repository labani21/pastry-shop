import React from 'react'
import './Chocolate.scss'
import {Row,Col,Container,Card,Button} from 'react-bootstrap'
import ferrero from '../../../Images/ferrero.jpg'
import black from '../../../Images/black-forest.png'
import kitkat from '../../../Images/kitkat.jpg'
import Footer from '../../../Layout/Footer'

export default function Chocolate() {
  return (
    <>
    <h1 className='heading2'>Fresh Baked Chocolate Cakes Online </h1>
    <div className='chocolate-col'>
    <Container>
  
    <Row>
      <Col><Card style={{ width: '14rem' }}>
      <img className='Img5' src={ferrero}/>
      <Card.Body>
        <Card.Title className='text4'>Ferrero rocher cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          Price: ₹799
        </Card.Text>
        <Button className='choco-btn' >Order Now</Button>
      </Card.Body>
    </Card></Col>

      <Col><Card style={{ width: '14rem' }}>
      <img className='Img5' src={black}/>
      <Card.Body>
        <Card.Title className='text5'>Black Forest Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹699
        </Card.Text>
        <Button className='choco-btn' >Order Now</Button>
      </Card.Body>
    </Card></Col>

      <Col><Card style={{ width: '14rem' }}>
      <img className='Img5' src={kitkat}/>
      <Card.Body>
        <Card.Title className='text5'>Chocolate Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        Price: ₹899
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
