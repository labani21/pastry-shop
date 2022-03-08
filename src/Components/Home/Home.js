import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Layout/Footer'
import Cakes from '../ItemCard/Cakes'
import Itemcard from '../ItemCard/Itemcard'
import cake from '../../Images/cake.png'
import './Home.scss'


export default function Home() {
  const navigate=useNavigate();

  const handleChange=()=>{
    navigate('/Menu');
  }

  return (
    <>
    <div >  
        <img src={cake} className='img1'/>
        <button onClick={handleChange} className='btn5'>Order Now</button>
        <div>
        <h2 className='text11'>Best Cake in town</h2>
        <h4 className='text12'>Cake makes everything better—all the more reason to get one delivered</h4>
        </div>
      </div>
      <div className='text1'>
      <h1 className='heading2'>Trending Now</h1>
      </div>
      <div className='cardItem'>
         <Itemcard/>
      </div>

      <div className='text2'>
      <h1 className='heading2'>New Arrivals</h1>
      </div>

      <div className='all-cakes'>
      <Cakes/>
      </div>
      <div>
        
      </div>
      
      <div>
    <Footer/>
    </div>
    
    
    </>
  )
}
