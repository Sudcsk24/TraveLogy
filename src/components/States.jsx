import React from 'react'
import { NavLink } from 'react-router-dom'

const States = () => {
    return (
        <div className='states container'>
            {/* <h1>States</h1> */}
            <div className="row">
                <div className="col-6 col-sm-3 col-md-2 dropdown mb-2">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Delhi
                    </button>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/delhi">Qutub Minar</NavLink>
                    </div>
                </div>
                <div className="dropdown col-6 col-sm-3 col-md-2">
                    <button className="btn btn-warning UP dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        UP
                    </button>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/tajmahal">Taj Mahal</NavLink>
                        <NavLink className="dropdown-item" to="/agra">Agra Fort</NavLink>
                    </div>
                </div>
                <div className="dropdown col-5 col-sm-3 col-md-2">
                    <button className="btn odisha dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Odisha
                    </button>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/suntemple">Konark Sun Temple</NavLink>
                    </div>
                </div>
                <div className="dropdown col-5 col-sm-3 col-md-2 mb-2 ml-3 mr-3">
                    <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        Assam
                    </button>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/kaziranga">Kaziranga National Park</NavLink>
                    </div>
                </div>
                <div className="dropdown col-11 col-sm-3 col-md-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                        MP
                    </button>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/khajuraho">Monuments of Khajuraho</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default States
