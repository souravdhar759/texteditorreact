import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
//     <nav classNameName={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode}  navbar-${props.green} bg-${props.green}`}>
      
//   <div classNameName="container-fluid">
//     <p classNameName="navbar-brand">{props.title}</p>
    

//     {/* <form classNameName="d-flex" role="search">
    
//         <a classNameName="nav-link" href="/">{props.about}</a>
//       <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
//       {/* <button classNameName="btn btn-dark" type="button">Switch to Dark</button> */}
//     {/* </form> */}
//     <div classNameName={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
//   <input classNameName="form-check-input" type="checkbox" role="switch" onClick={props.switchmode} id="flexSwitchCheckDefault"/>
//   <label >Dark Mode Enable</label>
// </div>
// <div classNameName={`form-check form-switch text-${props.green==='success'?'dark':'success'}`}>
//   <input classNameName="form-check-input" type="checkbox" role="switch" onClick={props.switcgreen} id="flexSwitchCheckDefault"/>
//   <label classNameName="form-check-label" htmlFor="flexSwitchCheckDefault" >Green Mode Enable</label>
// </div>
// <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
//   </div>
  
// </nav>
<nav className={`navbar navbar-expand-lg navbar-${props.mode } bg-${props.mode}  navbar-${props.green} bg-${props.green}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        </ul>
        </div>
        <div  className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.switchmode} id="flexSwitchCheckDefault"/>
  <label  classNameName="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode Enable</label>
</div>

        
    
      
      
   
  </div>
  
</nav>

  )
}
Navbar.prototypes ={
  title : PropTypes.string.isRequired,
}
Navbar.defaultProps={
  title:'set title here'
};