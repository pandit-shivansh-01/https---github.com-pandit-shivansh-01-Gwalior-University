import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
<>
<nav class="navbar navbar-expand-md nav fixed-top">
    <div class="container-fluid">
    <Link to="" class="navbar-brand">
    <img src="images/logo.png"/>
    <h3>GWALIOR UNIVERSITY</h3>
    </Link>
    <button class="navbar-toggler"data-bs-toggle="collapse" data-bs-target="#a">
      <span class="navbar-toggler-icon"></span>
    </button>
     
    <div class="collapse navbar-collapse" id="a"> 
      <ul class="navbar-nav ms-auto">
      <li><Link to="/" class="nav-Link">ABOUT</Link></li>
      <li><Link to="/campuslife" class="nav-Link">CAMPUS</Link></li>
      <li><Link to="/research" class="nav-Link">RESEARCH</Link></li>
      <li><Link to="/placements" class="nav-Link">PLACEMENTS</Link></li>
      <li><Link to="/contactus" class="nav-Link">CONTACT US</Link></li>
     
       </ul>
    </div>


  </div>
</nav>
</>

)
  }
export default Header