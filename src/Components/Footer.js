import React from 'react'
import '../Styles/Footer.css'

export default function Footer() {
    const customerSubscribe = (e)=>{
        e.preventDefault();
        document.querySelector('#btn-text').textContent = 'Subscribed';
    }
  return (
   <div className='container-fluid footer'>
       <div className='row mt-4 pt-5'>
            <span className='col-md-3'>
                <a href='https://www.facebook.com/Akashkumar0125'><i className="fa fa-facebook-square"></i></a>
                <a href='https://www.instagram.com/itsakshah/'><i className="fa fa-instagram"></i></a>
                <a href='https://twitter.com/Akash01raj'><i className="fa fa-twitter-square"></i></a>
                <a href='https://github.com/Akash5210'><i className="fa fa-github-square" ></i></a>
                <a href='https://www.linkedin.com/in/akash5210/'><i className='fa fa-linkedin-square'></i></a>
                
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
