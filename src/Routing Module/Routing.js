import React,{lazy,Suspense} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Login from '../Authentication/Login/Login';
import Registration from '../Authentication/Registration/Registration';
import About from '../Components/About/About';
import Berry from '../Components/Flavours/Berry/Berry';
import Chocolate from '../Components/Flavours/Chocolate/Chocolate';
import Eggless from '../Components/Flavours/Eggless/Eggless';
import Home from '../Components/Home/Home';
import PNF from '../Components/PNF/PNF';
import Header from '../Layout/Header';
import Protected from './Protected';

const Menu =lazy(()=>import('../Components/Menu/Menu'));



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
   
    
    <Route element={<Protected/>}>
    <Route path="/About" element={<About/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    </Route>
   
    <Route path="/chocolate" element={<Chocolate/>}/>
    <Route path="/eggless" element={<Eggless/>}/>
    <Route path="/berry" element={<Berry/>}/>
    

    <Route path="*" element={<PNF/>}/>
   
    </Routes>
    </Suspense>
    </Router>
  )
}
export default Routing;
