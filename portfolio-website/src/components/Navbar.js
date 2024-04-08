import React from 'react';
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
      <nav Class="navbar navbar-expand-lg">
  <div class="container">  
          {/* <img class="logo" src={logo}></img> */}
        <a Class="navbar-brand" id="lora" href="#">Hailey Carlson</a>
        <button Class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon= {faBars}/>
        </button>

        <div Class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul Class="navbar-nav ms-auto">
            <li Class="nav-item active">
              <a Class="nav-link" href="#">Home <span Class="sr-only">(current)</span></a>
            </li>
            <li Class="nav-item">
              <a Class="nav-link" href="#">About Me</a>
            </li>
            <li Class="nav-item">
              <a Class="nav-link" href="#">Services</a>
            </li>
            <li Class="nav-item">
              <a Class="nav-link" href="#">Portfolio</a>
            </li>
            <li Class="nav-item">
              <a Class="nav-link" href="#">Contact Me</a>
            </li>
          </ul>
          {/* Search Bar if you want to use it ] */}
          {/* <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
  </div>            
</nav>
    )
}

export default Navbar;