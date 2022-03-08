import React from 'react'
import {useFormik} from 'formik';
import axios from 'axios';
import Footer from '../../Layout/Footer';
import './Login.scss'



const ValidateForm = (formValue) => {
    const errors={};
    const reg_exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
    const reg_exp1=/^(?=.*[@!#$%&])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$/i

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
export default function Login() {
    const formik= useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:ValidateForm,
        onSubmit:(values)=>{
            console.log("Recieved values:",values);
            axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
            .then(res=>{
                console.log("Axios res:",res);
                window.localStorage.setItem("Token",res.data.token);
                alert("You have login successfully");
            })
            .catch(err=>{
                console.log("Error in axios:",err);
            })
        
        }
    });
 
   
  return (
      <>
      <div className='signin'>
 <div className="signinFrm">
    <form className='form1' onSubmit={formik.handleSubmit}>
     <h3 className='label-signin'>Sign In</h3>
    <br/>
    <div className='inputContainer'>
    <label className='label3'> Email address</label>
    <input type="email"  name="email" value={formik.values.email} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}/>
   {formik.touched.email && formik.errors.email ?
   (<span style={{color:'red'}}>{formik.errors.email}</span>):null}<br></br><br/>
   </div>

   <div className='inputContainer'>
    <label className='label3'> Password</label>
    <input type="password"  name="password" value={formik.values.password} 
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}/>
     {formik.touched.password && formik.errors.password ?
     (<span style={{color:'red'}}>{formik.errors.password}</span>):null}<br/><br/>
     </div>


<button type="submit" className='submitBtn4' disabled={!(formik.isValid && formik.dirty)}>Submit</button>
 </form>

    </div>
    <div>
    <Footer/>
    </div>
    
    </div>
    </>
  )
}


