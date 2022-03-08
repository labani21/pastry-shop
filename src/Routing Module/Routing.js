import React,{lazy,Suspense} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Registration from '../Authentication/Registration/Registration';

import Home from '../Components/Home/Home';
import PNF from '../Components/PNF/PNF';
import Header from '../Layout/Header';
import SubTopic from '../Topic/SubTopic/SubTopic';
import Protected from './Protected';



const Menu =lazy(()=>import('../Components/Menu/Menu'));
const About =lazy(()=>import ('../Components/About/About'));


function Routing() {
  return (
    <Router>
    <Header/>
    <Suspense fallback={<h1>Loading....</h1>}>
    <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Registration" element={<Registration/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/About" element={<About/>}/>
   
    
    <Route element={<Protected/>}>
    <Route path="/Menu" element={<Menu/>}/>
    </Route>
   
   
    <Route path="/SubTopic/:id" element={<SubTopic/>}/>
    
   
    

    <Route path="*" element={<PNF/>}/>
   
    </Routes>
    </Suspense>
    </Router>
  )
}
export default Routing;
