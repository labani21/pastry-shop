import React from 'react'
import {useFormik} from 'formik';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Footer from '../../Layout/Footer';
import './Registration.scss'


const ValidateForm = (formValue) => {
  const errors={};
  const reg_exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
  const reg_exp1=/^(?=.*[@!#$%&])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$/i

  if(!formValue.username){
      errors.username="Please enter your name";
  }else if(formValue.username.length<5){
          errors.username="minlength 5";      
  }

  
  if(!formValue.email){
      errors.email="Please enter your email";
  }else if(!reg_exp.test(formValue.email)){
          errors.email="Invalid email";      
  }

   
  if(!formValue.password){
      errors.password="Please enter your password";
  }else if(!reg_exp1.test(formValue.password)){
          errors.password="Invalid password";      
  }

  console.log("Error:",errors);
  return errors;
};

export default function Registration() {
  const formik= useFormik({
    initialValues:{
        username:'',
        email:'',
        password:''
    },
    validate:ValidateForm,
    onSubmit:(values)=>{
        console.log("Recieved values:",values);
        axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
        .then(res=>{
            console.log("Axios res:",res);
        })
        .catch(err=>{
            console.log("Error in axios:",err);
        })
    }
});

const navigate=useNavigate();

const handleLogout=()=>{
  window.localStorage.clear();
  navigate('/Login');
}
  return (

  <>
 
    <div className='signup'>
    <div className="signupFrm1">
    <form   className="form" onSubmit={formik.handleSubmit}>

    <br/>
    <div className='inputContainer'>
     <label className='label2'> Username</label>
     <input type="text"  name="username" value={formik.values.username} 
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}/>
     {formik.touched.username && formik.errors.username ?
    (<span style={{color:'red'}}>{formik.errors.username}</span>):null}<br></br><br/>
     </div>
     
     <div className="inputContainer">
     <label className="label2"> Email address</label>
 <input type="email"  name="email" value={formik.values.email} 
 onChange={formik.handleChange}
 onBlur={formik.handleBlur}/>
     {formik.touched.email && formik.errors.email ?
    (<span style={{color:'red'}}>{formik.errors.email}</span>):null}<br></br><br/>
    </div>
    
    <div className="inputContainer">
    <label className="label2"> Password</label>
    <input type="password"  name="password" value={formik.values.password} 
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}/>
     {formik.touched.password && formik.errors.password ?
     (<span style={{color:'red'}}>{formik.errors.password}</span>):null}<br/><br/>
     </div>
   


<button type="submit" className="submitBtn" onClick={handleLogout} disabled={!(formik.isValid && formik.dirty)}>Submit</button>
 </form>
</div>

<div>
 <Footer/>
</div>
 </div>
 
 </>
    
  )
}
