import React from 'react'
import { useParams } from 'react-router-dom';
import topicData from '../Topic.json'
import {Row,Col,Card,Button} from 'react-bootstrap'
import Footer from '../../Layout/Footer';
import './SubTopic.scss'

function SubTopic() {
  let value=useParams();
  console.log("use Params in subtopic:",value);
  let data=topicData.Topic.find((top)=>top.Topic_id===value.id);
  return (
    <div className='s-col'>
        <Row xs={1} md={3} className="sdetail-topic">
            
           {data.sub_topic.map((subtop)=>
            <Col key={subtop.sub_topic_id}>
            <Card className='scard' style={{ width: '16rem' }}>
            <Card.Img className='simg6' variant="top" src={subtop.sub_image1} />
              <Card.Body>
              <Card.Text className='scard-text1' >{subtop.sub_name}</Card.Text>
              <Card.Text className='scard-text2'>{subtop.sub_description}</Card.Text>
              <Card.Title className='scard-text3'>{subtop.sub_price}</Card.Title>
              </Card.Body>
            </Card>
            </Col>
           )}
           </Row>
           <Footer/>
    </div>
  )
}

export default SubTopic