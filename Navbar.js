import React from 'react'
import logo from '../../clipboard.png'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link class="navbar-brand ml-5" href="#">
                <img src={logo} alt="logo" style={{ width: '35px' }} />
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation"
                >
                <span>
                  <i className="fas fa-bars" style={{ color: '#666' }} />
                </span>
            </button>

            <div className="collapse navbar-collapse" 
            id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
            <li className="nav-item active">
                <Link className="nav-link text-white text-uppercase ml-5" to="home">
                    Home
                    <span class="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white text-uppercase ml-5" to="about"
                href="#">about
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white text-uppercase ml-5" to="contact"
                href="#">Contact
                </Link>
            </li>
          
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" 
            type="search" 
            placeholder="Search coach here!" 
            aria-label="Search"/>
        <button className="btn btn-outline-primary my-2 my-sm-0" 
            type="submit">
            Search
        </button>
        </form>
    </div>
</nav>
    )
}

export default Navbar;