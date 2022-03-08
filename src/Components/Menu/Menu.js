import React, { useState } from 'react'
import prodData from '../../Topic/Topic.json'
import {Row,Col,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Footer from '../../Layout/Footer'
import './Menu.scss'

export default function Menu() {
  const[searchText,setSearchTerm]=useState('')

  return (
    <>
    <div className='search'>
  
    <input  className='searchInput' type="text" placeholder='Search .......' onChange={event=>{setSearchTerm(event.target.value)}}></input>
    <Row xs={1} md={3} className="Mrow">

        
                {prodData.Topic.filter((val)=>{
                  if(searchText===""){
                    return val
                  }else if(val.Topic_name.toLowerCase().includes(searchText.toLowerCase())){
                    return val
                  }
                  }).map((prod)=>
                <Col key={prod.Topic_id}>
                <Card  className='card1' style={{ width: '16rem' }}>
              
                <Card.Img className='Card-img' variant="top" src={prod.T_image} />
              
                <Card.Body>
                
                 <Card.Title className='Card-title'>{prod.Topic_name}</Card.Title>
                   <Link className='Link' to={`/SubTopic/${prod.Topic_id}`}>See All</Link>
                    </Card.Body>
                    </Card>
                </Col>
              )}
              
              
              </Row>
              <Footer/>
    </div>
    </>
  )
}
