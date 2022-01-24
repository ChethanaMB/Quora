import React from "react";


const Navbar=()=>{
 return(
     <div>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">
       
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img
              src="./assets/logo.png"
              height="15"
              alt="College Quora"
              loading="lazy"
            />
          </a>
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Tip Us</a>
            </li>
          </ul>
          
        </div>
        
        <div className="d-flex align-items-center">
          
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/register">SignUp</a>
            </li>
            </ul>
         
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="/"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <a className="dropdown-item" href="/">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="/">Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="/">Logout</a>
              </li>
            </ul>
          </div>
        </div>
    
      </div>
      
    </nav>
    
    </div>
    )  ;
};
export default Navbar;