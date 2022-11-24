import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <h1>TAJ MAHAL</h1>
            <div className="row">
                <div className="col-md-3 mb-2 taj-mahal">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzck66ohYQFpVTuNPkylayULxFHrFuXebYMg&usqp=CAU" alt="" />
                </div>
                <div className="col-md-3 taj-mahal">
                    <img src="https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692__480.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
