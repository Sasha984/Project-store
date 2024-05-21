import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';


function Header() {

    return (
        
       <header>
        <div className='header d-flex flex-row justify-content-between align-items-center'>
        <NavLink to="/"><img className='logo' src="/images/logo.png" alt="logo" /></NavLink>
         <nav>
        <input type="checkbox" name="menu" id="btn-menu" />
    <label htmlFor="btn-menu">Menu</label> 
           <ul className=" ">
             <li><NavLink to="/" className="nav-link px-2 link-body-emphasis">Home</NavLink></li>
             <li><NavLink to="/news" className="nav-link px-2 link-body-emphasis">News</NavLink></li>
             <li><NavLink to="/tutorial" className="nav-link px-2 link-body-emphasis">Tutorials</NavLink></li>
             <li><NavLink to="/sponsors" className="nav-link px-2 link-body-emphasis">Sponsors</NavLink></li>
             <li><NavLink to="/contacts" className="nav-link px-2 link-body-emphasis">Contacts</NavLink></li>
             <li><NavLink to="/bloggerProfile" className="nav-link px-2 link-body-emphasis">My profile</NavLink></li>
           </ul>
    </nav>
           <div className="d-flex flex-row align-items-center">
           <form className="search col-lg-auto mb-lg-0 me-lg-3" role="search">
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