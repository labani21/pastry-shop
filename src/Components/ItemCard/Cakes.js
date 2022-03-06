import React from 'react'
import './Cakes.scss'
import {Row,Container,Col,Card} from 'react-bootstrap'
import ferrero from '../../Images/ferrero.jpg'
import fruitcake from '../../Images/fruitcake.jpg'
import kitkat from '../../Images/kitkat.jpg'
import lichi from '../../Images/lichi.jpg'
import makeup from '../../Images/makeup.jpg'
import rasmalai from '../../Images/rasmalai.jpg'
import bag from '../../Images/bag.jpg'
import chocolate from '../../Images/chocolate.jpg'
import web from '../../Images/spidyweb.jpg'

export default function Cakes() {
  return (
      <>
      <div className='allcake'>
      <div className='cake'>
      <Container>
  <Row>
    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={ferrero} />
    <Card.Body>
      <Card.Title className='text9'>Ferrero Rocher Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹659</h5>
      </Card.Text>
     
    </Card.Body>
  </Card></Col>

    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={kitkat} />
    <Card.Body>
      <Card.Title className='text9'>Kitkat Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹779</h5>
      </Card.Text>
      
    </Card.Body>
  </Card></Col>

    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={makeup} />
    <Card.Body>
      <Card.Title className='text9'>Makeup kit Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹749</h5>
      </Card.Text>
      
    </Card.Body>
  </Card></Col>
  </Row>
</Container>
      </div>

      <div class='cake1'>
      <Container>
  <Row>
    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={fruitcake} />
    <Card.Body>
      <Card.Title className='text9'>Fruit Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹589</h5>
      </Card.Text>
      
    </Card.Body>
  </Card></Col>

    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={lichi} />
    <Card.Body>
      <Card.Title className='text9'>Lichi Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹999</h5>
      </Card.Text>
     
    </Card.Body>
  </Card></Col>

    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={rasmalai} />
    <Card.Body>
      <Card.Title className='text9'>Rashmalai Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹459</h5>
      </Card.Text>
      
    </Card.Body>
  </Card></Col>
  </Row>
</Container>
      </div>

      <div className='cake2'>
      <Container>
  <Row>
    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={bag} />
    <Card.Body>
      <Card.Title className='text9'>Bag Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹589</h5>
      </Card.Text>
      
    </Card.Body>
  </Card></Col>

    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={chocolate} />
    <Card.Body>
      <Card.Title className='text9'>Rich Chocolate Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹469</h5>
      </Card.Text>
      
    </Card.Body>
  </Card></Col>

    <Col><Card style={{ width: '18rem' }}>
    <Card.Img className='Img5' alt='' variant="top" src={web} />
    <Card.Body>
      <Card.Title className='text9'>Web Cake</Card.Title>
      <Card.Text className='text10'>
      A toothsome treat for the sugar lovers who are just passionate about chocolate and relish the mushiness of cake. 
      Made of two layers of impossibly moist chocolate filled with mushy rich cream,
       this cake carries the enticing aroma of Vanilla and sumptuousness of chocolate.
        <h5>₹329</h5>
      </Card.Text>
      
    </Card.Body>
  </Card></Col>
  </Row>
</Container>
      </div>
      </div>
      </>
    
  )
}
