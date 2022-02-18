import React from 'react'
import PropTypes from 'prop-types' //this is props properties to set which tyes of props allowed set by us
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home.</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li> */}

          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>

          </form> */}
          <div className='mx-2'>
            <button type="button" className="btn btn-primary" id='primary' onClick={props.forPalMode} style={{borderRadius:"50%"}} ></button>
            <button type="button" className="btn btn-danger" id='danger'  onClick={props.forDngMode} style={{borderRadius:"50%"}} ></button>
            <button type="button" className="btn btn-warning" id='warning' onClick={props.forWarMode}  style={{borderRadius:"50%"}} ></button>
            <button type="button" className="btn btn-success"  id='success' onClick={props.forSucMode} style={{borderRadius:"50%"}}></button>
          </div>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

//this is props types we set incease of by mistake we sent other types it will throiwn ana eror
Navbar.prototype = {
  title: PropTypes.string,  //.isRequired in case of default is not set and props are not givre it will show error
  aboutText: PropTypes.string.isRequired

}

//This will bt the default props value if did not reneder the props in case in app.js
Navbar.defaultProps = {
  title: 'Set The title Here',
  aboutText: "set the about"
}