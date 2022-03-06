import React from 'react'
import Footer from '../../Layout/Footer'
import {Card,Button} from 'react-bootstrap'
import './About.scss'
import about from '../../Images/about.jpg'

export default function About() {
  return (
    <>
    <div className='about'>
    <div className='about-card'>
    <Card className='about-header'>
  <Card.Header className='about-text'>About Us</Card.Header>
  <Card.Body className='about-body'>
  <Card.Text className='about-text2'>
  We are not just a bakery, we are not just bakers. In fact, we are just like you,
   a bunch of food lovers fascinated with sweet indulgence,
    who dreamt of creating an appetizing fairy land of divine delicacies that relishes the utmost desires.
  </Card.Text>

  <img  className='about-img' src={about}/>
    <Card.Title></Card.Title>
    <Card.Text className='about-text1'>
    <h1 className='number'>1.</h1>
    Beginning with finest flour mixed with our passion, sprinkling some sugar and butter, 
    blending it with our deepest emotions to create a perfect batter. Kindling it in the oven with our warmth and finally 
    crafting the intricate creations in the form of some lip-smacking cakes, which are out of this world! 
    The only additives you’ll find in our products are an extra pinch of love, care and devotion!
    </Card.Text>
    <Card.Text className='about-text1'>
    <h1 className='number'>2.</h1>
    We add our magical touch to our recipe, to bring out the flavor and oomph into everything.
     With fresh ingredients and some traditional methods, 
     we craft some one-of-a-kind cakes baked-fresh-from-the-oven to excel your taste buds.
    </Card.Text>
    <Card.Text className='about-text1'>
  
    <h1 className='number'>3.</h1>And then, to fill up each celebratory moment with euphoria and excitement, 
    we put in our heart and soul in delivering the luscious cake at just the right time because we understand! 
    We understand the emotions attached to the occasion and so, we always make an effort to add to your happy moments.
    </Card.Text>
   <p className='about-text2'> We are here to redefine the all-time classics to create some heavenly and 
   unforgettable experiences. And with all this and more, we wish to fill the empty spaces in every 
   conversation with a smile.</p>
    <Button className='button' variant="primary">Read More</Button>
  </Card.Body>
</Card>
    </div>

    <Footer/>
    </div>
    </>
  )
}
