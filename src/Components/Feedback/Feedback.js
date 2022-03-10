import React,{useState} from 'react'
import {Form,Row,Col,Button} from  'react-bootstrap';
import Footer from '../../Layout/Footer';
import './Feedback.scss'

function Feedback() {

    const validatePhonenumber=RegExp("^[+0]{0,2}(91)?[0-9]{10}$")
    const[inputState,setInputState]=useState({isError:{
      username:"",phnumber:"",subject:"",message:""
    }});

    const handleChange=(event)=>{
        event.persist();
        
    
        let {name,value} = event.target;
        let errMsg={...inputState.isError};
        switch (name)
        {
          case 'username':errMsg.username=value.length<3 ? "Atleast 3 characters required":" ";
                           break;
          case 'phnumber':errMsg.phnumber=validatePhonenumber.test(value) ? "":"Wrong pattern";
                           break;
          case 'subject':errMsg.subject=value.length<2 ? "Atleast 2 characters required":" ";
                           break;
          case 'message':errMsg.message=value.length<20 ? "Atleast 20 characters required":" ";
                           break;
          default:break;
        }
        setInputState({...inputState,[name]:value,isError:errMsg})
        console.log("inputState:",inputState)
  }
    const submitHandler=(event)=>{
      event.preventDefault();
      console.log("After submit , value:",inputState);
    }

  return (
    <>
    <div className='feedin'>
    <div className='feed'>
    <h1 className='feedback'>Feedback</h1>
        <Form  className='form1' onSubmit={submitHandler}>
        
        <Form.Group as={Row} className="mb-3" >
     
        <Col sm="10">
          <Form.Control type="text" className='field'  placeholder="Username" name="username" onChange={handleChange}/>
          {inputState.isError.username.length>0 && (<span>{inputState.isError.username}</span>)}
        </Col>
      </Form.Group>
        
      <Form.Group as={Row} className="mb-3" >
  
    <Col sm="10">
      <Form.Control type="phnumber" className='field' placeholder="Phone number" name="phnumber" onChange={handleChange}/>
      {inputState.isError.phnumber.length>0 && (<span>{inputState.isError.phnumber}</span>)}
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" >

  <Col sm="10">
    <Form.Control type="subject" className='field' placeholder="Subject" name="subject" onChange={handleChange}/>
    {inputState.isError.subject.length>0 && (<span>{inputState.isError.subject}</span>)}
  </Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" >

<Col sm="10">
    <textarea class="form-control" className='field' placeholder="Write Something Here........" name="message" onChange={handleChange}></textarea>
    {inputState.isError.message.length>0 && (<span>{inputState.isError.message}</span>)}
  </Col>
</Form.Group>

<Button type="submit" className='submitBtn4' >Submit</Button>
      </Form>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
</>

  )
}

export default Feedback