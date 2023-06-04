import React from 'react';
import '../Styles/Footer.css';

import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";

export default function Footer({socialMedia}) {
    const customerSubscribe = (e)=>{
        e.preventDefault();
        document.querySelector('#btn-text').textContent = 'Subscribed';
    }
    const temp = [facebook, instagram, twitter, github, linkedin];
    for(let i=0;i<socialMedia.length;i++){
        socialMedia[i].icon = temp[i];
    }
  return (
   <div className='container-fluid footer'>
       <div className='row mt-4 pt-5'>
            <span className='col-6 col-md-3 social-link'>
                {socialMedia.map(item => <a href={item.link} className='me-2'><img src={item.icon} width={"40px"}/></a>)}
            </span>
            <form className='col-md-8' onSubmit={customerSubscribe}>
                <div className='row subscribe'>
                    <h3 className='col-md-5 text-light'>Subscribe to our news</h3>
                    <input type='email' className='form-control col-md col-4 me-2' placeholder="Enter your Email" required/>
                    <button type='submit' className='btn btn-warning text-secondary col-md-1' id='btn-text'>Subscribe</button>
                </div>
            </form>
       </div>
   </div>
  )
}
