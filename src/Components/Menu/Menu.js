import React from 'react'
import Footer from '../../Layout/Footer'
import './Menu.scss'
import {Col,Container,Row,Card} from 'react-bootstrap'
import chocolate from '../../Images/chocolate.jpg'
import fruitcake from '../../Images/fruitcake.jpg'
import cupcake from '../../Images/cupcake.jpg'
import strawberry from '../../Images/strawberry.jpg'
import plum from '../../Images/plum.jpg'
import designer from '../../Images/designer.jpg'



export default function Menu() {
  return (
    <>
    <h1 className='heading2'>Fresh Baked Cakes Online in India</h1>
    <div className='Menu'>
    <div className='Menu-col1'>
    <Container>
   
    <Row>
      <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img6' src={chocolate}/>
      <Card.Body>
        <Card.Title className='text5'>Chocolate Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link className='link1' href="chocolate">See All</Card.Link> 
      </Card.Body>
    </Card></Col>

      <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img6' src={fruitcake}/>
      <Card.Body>
        <Card.Title className='text5'>Eggless Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link className='link1' href="eggless">See All</Card.Link>
      </Card.Body>
    </Card></Col>
  
      <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img6' src={cupcake}/>
      <Card.Body>
        <Card.Title className='text5'>Cup Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link className='link1' href="#">See All</Card.Link>
      </Card.Body>
    </Card></Col>
    </Row>
  </Container>
  </div>
  
  <div className='Menu-col2'>
  <Container >
    <Row>
      <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img6' src={strawberry}/>
      <Card.Body>
        <Card.Title className='text5'>Berry Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link className='link1' href="berry">See All</Card.Link>
      </Card.Body>
    </Card></Col>
     
    <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img6' src={plum}/>
      <Card.Body>
        <Card.Title className='text5'>Dry Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link className='link1' href="#">See All</Card.Link>
      </Card.Body>
    </Card></Col>
     
    <Col><Card style={{ width: '14rem' }}>
      <img alt='' className='Img6' src={designer}/>
      <Card.Body>
        <Card.Title className='text5'>Designer Cake</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
        </Card.Text>
        <Card.Link className='link1' href="#">See All</Card.Link>
      </Card.Body>
    </Card></Col>
    </Row>
  </Container>
  </div>
     
    </div>
    <div className='footer'>
    <Footer/>
    </div>
    </>
  )
}
