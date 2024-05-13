import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        
       <header>
        <div className='header d-flex flex-row justify-content-between align-items-center'>
        <NavLink to="/"><img src="/images/logo.png" alt="logo" /></NavLink>
       
         
   
           <ul className="nav d-flex justify-content-center flex-wrap">
             <li><NavLink to="/" className="nav-link px-2 link-body-emphasis">Home</NavLink></li>
             <li><NavLink to="/news" className="nav-link px-2 link-body-emphasis">News</NavLink></li>
             <li><NavLink to="/tutorial" className="nav-link px-2 link-body-emphasis">Tutorials</NavLink></li>
             <li><NavLink to="/sponsors" className="nav-link px-2 link-body-emphasis">Sponsors</NavLink></li>
             <li><NavLink to="/contacts" className="nav-link px-2 link-body-emphasis">Contacts</NavLink></li>
             <li><NavLink to="/bloggerProfile" className="nav-link px-2 link-body-emphasis">My profile</NavLink></li>
           </ul>
   
           <div className="d-flex flex-row align-items-center">
           <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
             <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
           </form>
             <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
               <img src="/images/avatar-big.png" alt="mdo" width="50" height="50" className="rounded-circle"/>
             </a>
             <ul className="dropdown-menu text-small">
               <li><NavLink to="/login" className="dropdown-item">Sign out</NavLink></li>
             </ul>
           
         </div>
         </div>
     </header>
    )
}

export default Header;