import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <>
    <div className='main-footer'>
    <div className='container-fluid'>
       <div className='row'>
          <div className='col'>
             <h5>KNOW US</h5>
             <ul className='list-unstyled'>
             <li>Our Story</li>
             <li>Contact us</li>
             <li>Locate us</li>
             <li>Blog</li>
             </ul>
          </div>
          <div className='col'>
            <h5>NEED HELP</h5>
            <ul className='list-unstyled'>
            <li>FAQ</li>
            <li>Cancellation and refund</li>
            <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='col'>
            <h5>MORE INFO</h5>
            <ul className='list-unstyled'>
            <li>Corporate cakes</li>
            <li>Coupones and offers</li>
            <li>Franchise</li>
            </ul>
          </div>
       </div>
       <hr/>
       <div className='row'>
       <p className='col-sm'>
       &copy;{new Date().getFullYear()} SWEET CHERRY| All right reserved |Terms of service|Privacy</p>
       </div>
    </div>
    </div>
    </>
  )
}
