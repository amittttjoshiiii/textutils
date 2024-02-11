import React from 'react';
import PropTypes from 'prop-types';
// import { Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.txtclr} `}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.txtclr}`} href="/" >textutils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-a active text-${props.txtclr}`} aria-current="page" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className={`nav-a disabled text-${props.txtclr}`} aria-disabled="true" href='/about'>About me</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="form-check form-switch mx-3" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
          </div>
          <div className="form-check form-switch mx-3" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeRed} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
          </div>
          <div className="form-check form-switch mx-3" >
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeGreen} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "i am here"
}