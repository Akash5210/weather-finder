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
   <div className='container-fluid footer pb-1'>
       <div className='row mt-4'>
            <div className='col-8 col-md-3 mt-3 pt-4 mx-auto social-link'>
                {socialMedia.map(item => <a href={item.link} className='me-2'><img src={item.icon} width={"40px"}/></a>)}
            </div>
            <div className='col-md-8 mt-4 py-3 mx-auto subscribe rounded'>
                <div className='row mx-auto'>
                    <div className='col-md-5'>
                        <h3 className='text-light mx-auto text-center'>Subscribe to our news</h3>
                    </div>
                    <div className='col-md-7'>
                        <form onSubmit={customerSubscribe} className='d-inline-block'>
                            <div className='row'>
                                <div className='col-md-11'>
                                    <input type='email' className='form-control' placeholder="Enter your Email" required/>
                                </div>
                                <div className='col-md-1'>
                                    <button type='submit' className='btn btn-danger' id='btn-text'>Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
       </div>
       <p className='small text-center'>&copy;Created and designed by Akash Kumar</p>
   </div>
  )
}
