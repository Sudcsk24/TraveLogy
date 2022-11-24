import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar navbar-light bg-light top-fixed">
                    <a className="navbar-brand" href="#">Trave<span className='text-primary'>Logy</span> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/features">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/states">States</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Gallery</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                <div className="image">
                    <img className='' src="http://janganhindi.com/wp-content/uploads/2021/04/unnamed-1.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Navbar
