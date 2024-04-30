import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';

function Footer() {
  
    return (
        <>
        <footer className="p-5 ">
            <div className='d-flex flex-row mb-5'>
<img className='logo-footer' src="/images/logo.png" alt="logo"/>
<div className='line'></div>
</div>
    <div className="row justify-content-between">
      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-courses mb-5'>Magazine</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 "><NavLink to="/news" className='nav-link p-0 text-body-secondary'>News</NavLink></li>
          <li className="nav-item mb-2 "><NavLink to="/tutorial" className='nav-link p-0 text-body-secondary'>Tutorial</NavLink></li>
          <li className="nav-item mb-2 "><NavLink to="/bloggers" className='nav-link p-0 text-body-secondary'>Top bloggers profiles</NavLink></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-courses mb-5'>Courses</h5>
        <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Courses</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-courses mb-5'>Fiera</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Roma</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Vicenza</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-courses mb-5'>Lorem ipsum</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 "><NavLink to="/contacts" className='nav-link p-0 text-body-secondary'>Contacts</NavLink></li>
          <li className="nav-item mb-2 "><NavLink to="/sponsors" className='nav-link p-0 text-body-secondary'>Sponsors</NavLink></li>
         </ul>
</div>

<div className="col-6 col-md-2 mb-3">
        <h5 className='text-courses mb-5' >Lorem ipsum</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Itaque perspiciatis</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Doloremque deleniti</a></li>
         </ul>
</div>

    </div>

    <div className='line'></div>
    <div className=' px-5 py-2 d-flex flex-row justify-content-center gap-2 align-items-center'>
        <a href="#"><img src="/images/instagram.png" alt="instagram" /></a>
        <a href="#"><img src="/images/facebook.png" alt="facebook" /></a>
        <a href="#"><img src="/images/pinterest.png" alt="pinterest" /></a>
        <a href="#"><img src=" /images/youtube.png" alt="youtube" /></a>
    </div>

  </footer>
  </>
    );
}


export default Footer;