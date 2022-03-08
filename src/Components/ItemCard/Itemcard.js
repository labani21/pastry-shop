import React from 'react'
import {Card,Button,Container,Row,Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import pinata from '../../Images/pinata.jpg'
import bomb from '../../Images/bomb.jpg'
import pull from '../../Images/pull.jpg'
import './Itemcard.scss'


export default function Itemcard() {
  const navigate=useNavigate();

  const handleChange=()=>{
    navigate('/Menu');
  }

  return (
    <>
    <div className='Item'>
    <Container className='cardCont'>
  <Row>
    <Col className='Item-col'><Card style={{ width: '18rem' }}>
    <Card.Img className='cardImg' alt='' variant="top" src={pinata} />
    <Card.Body>
      <Card.Title className='text6'>Pinata Cake</Card.Title>
      <Card.Text className='text8'>
      Pinata cakes are ruling the hearts of every cake lover. The joy of smashing the cake to reveal treats is unexplainable. 
      </Card.Text>
      <Button  onClick={handleChange} className='button2'>Order Now</Button>
    </Card.Body>
  </Card></Col>
   
  <Col className='Item-col'><Card style={{ width: '18rem' }}>
    <Card.Img className='cardImg' alt='' variant="top" src={bomb} />
    <Card.Body>
      <Card.Title className='text6'>Bomb Cake</Card.Title>
      <Card.Text className='text8'>
      Make your celebrations more fun and full of surprise as you munch upon bomb cakes with your dear ones. 
      </Card.Text>
      <Button onClick={handleChange} className='button2' >Order Now</Button>
    </Card.Body>
  </Card></Col>
    
  <Col className='Item-col'><Card style={{ width: '18rem' }}>
  <Card.Img className='cardImg' alt='' variant="top" src={pull} />
    <Card.Body>
      <Card.Title className='text6' >Pull Me Up</Card.Title>
      <Card.Text className='text8'>
      Place a pull me up cake online order and have a grand celebration with your near and dear ones. 
      </Card.Text>
      <Button onClick={handleChange} className='button3' >Order Now</Button>
    </Card.Body>
  </Card></Col>
  </Row>
</Container>
    </div>


    </>
  )
}
