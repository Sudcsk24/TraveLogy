import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 widget">
                            <h3>TraveLogy</h3>
                            <p>TraveLogy is a collection of information about all the World Heritages of India.
                                We are regularly updating our database and information about all the heritages/monuments of India.</p>
                            <p>We have a collection of photographs and geo-locations to help you plan your trip around this heritages and gather all the cultural information before trip as well.</p>
                        </div>
                        <div className="col-sm-6 col-md-3 widget ml-auto">
                            <h3 id="course">TOP HERITAGE PLACES</h3>
                            <ul className="latest_course">
                                <li><NavLink to="/tajmahal">Taj Mahal</NavLink></li>
                                <li><NavLink to="/delhi">Qutub Minar</NavLink></li>
                                <li><NavLink to="/suntemple">Konark Sun Temple</NavLink></li>
                                <li><NavLink to="/khajuraho">Monuments of Khajuraho</NavLink></li>
                                <li><NavLink to="/kaziranga">Kaziranga National Park</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">TraveLogy.</div>
                        <div className="col-md-6">
                            <div className="social_icons float-md-right">
                                <i className="fa-brands fa-linkedin"></i>
                                <i className="fa-brands fa-square-facebook"></i>
                                <i className="fa-brands fa-square-twitter"></i>
                                <i className="fa-brands fa-square-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
